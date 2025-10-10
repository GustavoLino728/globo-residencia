"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscaAudDHandler = buscaAudDHandler;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const fileService_1 = require("../services/fileService");
const audioService_1 = require("../services/audioService");
const auddService_1 = require("../services/auddService");
const queueService_1 = require("../services/queueService");
async function buscaAudDHandler(request, reply) {
    const LOG_DIR = path.join(process.cwd(), 'tmp_audio');
    const LOG_FILE = path.join(LOG_DIR, 'process.log');
    const appendLog = (m) => {
        try {
            if (!fs.existsSync(LOG_DIR))
                fs.mkdirSync(LOG_DIR, { recursive: true });
            fs.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] ${m}\n`);
        }
        catch (e) {
            // ignore
        }
    };
    appendLog('Received /buscaAudD request');
    // Este endpoint aceita multipart/form-data com `file`, raw binary ou JSON base64
    let inputPath;
    const contentType = (request.headers['content-type'] || '').toString();
    if (contentType.includes('multipart/form-data')) {
        const file = await request.file();
        if (!file)
            return reply.status(400).send({ error: 'Nenhum arquivo multipart recebido' });
        appendLog('Saving multipart upload to disk');
        inputPath = await (0, fileService_1.saveFile)(file);
        appendLog('Saved upload to ' + inputPath);
    }
    else if (contentType.includes('application/octet-stream') || contentType.startsWith('audio/') || contentType.startsWith('video/')) {
        const buf = request.body;
        if (!buf || !Buffer.isBuffer(buf) || buf.length === 0)
            return reply.status(400).send({ error: 'Empty binary body' });
        appendLog('Saving raw binary body to disk');
        const filename = `upload-${Date.now()}.mxf`;
        const filePath = path.join(process.cwd(), 'uploads', filename);
        fs.writeFileSync(filePath, buf);
        inputPath = filePath;
        appendLog('Saved raw upload to ' + inputPath);
    }
    else {
        const body = request.body;
        if (!body || !body.data)
            return reply.status(400).send({ error: 'Missing data (base64) in body' });
        appendLog('Saving base64 upload to disk');
        inputPath = await (0, audioService_1.saveBase64ToFile)(body.data, body.filename || 'input.mxf');
        appendLog('Saved base64 upload to ' + inputPath);
    }
    try {
        appendLog('Starting convertMxfToWav for ' + inputPath);
        const wavPath = await (0, audioService_1.convertMxfToWav)(inputPath, 'converted.wav');
        appendLog('Converted to wav: ' + wavPath);
        const SEG_SECONDS = 20;
        appendLog(`Starting splitWav for ${wavPath} with segmentSeconds=${SEG_SECONDS}`);
        const segments = await (0, audioService_1.splitWav)(wavPath, SEG_SECONDS);
        appendLog('Split into ' + segments.length + ' segments');
        const results = [];
        for (let i = 0; i < segments.length; i++) {
            const seg = segments[i];
            appendLog('Enqueuing audd identify for segment ' + seg);
            const promise = (0, queueService_1.enqueue)(async () => {
                try {
                    appendLog('Calling audd for ' + seg);
                    const res = await (0, auddService_1.identifyAudioByFile)(seg);
                    appendLog('Audd returned for ' + seg);
                    return res;
                }
                catch (err) {
                    appendLog('Audd error for ' + seg + ': ' + (err && err.message ? err.message : String(err)));
                    return { status: 'error', error: { message: err && err.message ? err.message : String(err) } };
                }
            });
            const auddRes = await promise;
            results.push({ segment: seg, index: i, auddResponse: auddRes });
        }
        appendLog('Starting concatWavs');
        const combined = await (0, audioService_1.concatWavs)(segments, 'combined.wav');
        appendLog('Concat finished: ' + combined);
        // construir cronograma
        const found = [];
        function timecodeToSeconds(tc) {
            const parts = tc.split(':').map(Number).reverse();
            let s = 0;
            if (parts[0])
                s += parts[0];
            if (parts[1])
                s += parts[1] * 60;
            if (parts[2])
                s += parts[2] * 3600;
            return s;
        }
        for (const r of results) {
            const idx = r.index;
            const segStartSec = idx * SEG_SECONDS;
            const audd = r.auddResponse;
            if (audd && audd.result) {
                const res = audd.result;
                const entries = [];
                if (typeof res.timecode === 'string' && res.timecode.includes('-')) {
                    const [a, b] = res.timecode.split('-').map((s) => s.trim());
                    const start = timecodeToSeconds(a) + segStartSec;
                    const end = timecodeToSeconds(b) + segStartSec;
                    entries.push({ start, end, meta: res });
                }
                if (Array.isArray(res.timecodes)) {
                    for (const tc of res.timecodes) {
                        if (tc.start != null && tc.end != null) {
                            const start = Number(tc.start) + segStartSec;
                            const end = Number(tc.end) + segStartSec;
                            entries.push({ start, end, meta: tc });
                        }
                        else if (typeof tc === 'string' && tc.includes('-')) {
                            const [a, b] = tc.split('-').map((s) => s.trim());
                            const start = timecodeToSeconds(a) + segStartSec;
                            const end = timecodeToSeconds(b) + segStartSec;
                            entries.push({ start, end, meta: tc });
                        }
                    }
                }
                if (entries.length === 0 && (res.title || res.artist || res.album)) {
                    entries.push({ start: segStartSec, end: segStartSec + (parseInt(process.env.AUDD_SEGMENT_SECONDS || '10', 10)), meta: res });
                }
                for (const e of entries) {
                    found.push({ index: idx, segment: r.segment, startSec: e.start, endSec: e.end, metadata: e.meta });
                }
            }
            if (audd && audd.status === 'success' && !audd.result) {
                found.push({ index: idx, segment: r.segment, found: false });
            }
        }
        const segmentosTrad = results.map((r) => ({
            segmento: r.segment,
            indice: r.index,
            respostaAudd: { status: r.auddResponse?.status ?? 'error', resultado: r.auddResponse?.result ?? null },
        }));
        const cronograma = [];
        for (let i = 0; i < segments.length; i++) {
            const segPath = segments[i];
            const segStart = i * SEG_SECONDS;
            const segEnd = segStart + SEG_SECONDS;
            const entries = found.filter((f) => f && f.index === i && f.metadata).map((f) => f.metadata);
            if (entries.length > 0) {
                cronograma.push({ indice: i, segmento: segPath, encontrado: true, inicioSegundos: Math.max(0, segStart), fimSegundos: segEnd, metadados: entries });
            }
            else {
                cronograma.push({ indice: i, segmento: segPath, encontrado: false, inicioSegundos: segStart, fimSegundos: segEnd });
            }
        }
        const respostaTraduzida = {
            caminhoCombinado: combined,
            quantidadeSegmentos: segments.length,
            segundosPorSegmento: SEG_SECONDS,
            resultados: segmentosTrad,
            cronograma: cronograma,
            configAudd: { params: { retorno: auddService_1.AUDD_CONFIG?.params?.return ?? '' } },
        };
        return reply.send(respostaTraduzida);
    }
    catch (err) {
        return reply.status(500).send({ error: err?.message || String(err) });
    }
}
exports.default = { buscaAudDHandler };
