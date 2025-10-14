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
exports.saveBase64ToFile = saveBase64ToFile;
exports.convertMxfToWav = convertMxfToWav;
exports.splitWav = splitWav;
exports.concatWavs = concatWavs;
exports.clearTmp = clearTmp;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const ffmpeg = require('fluent-ffmpeg');
const TMP_DIR = path.join(process.cwd(), 'tmp_audio');
if (!fs.existsSync(TMP_DIR))
    fs.mkdirSync(TMP_DIR, { recursive: true });
// Salva um arquivo a partir de uma string base64
async function saveBase64ToFile(base64, filename = 'input.mxf') {
    const buffer = Buffer.from(base64, 'base64');
    const filePath = path.join(TMP_DIR, filename);
    await fs.promises.writeFile(filePath, buffer);
    return filePath;
}
// Converte um arquivo MXF para WAV (mono, 16kHz, PCM 16)
function convertMxfToWav(inputPath, outputName = 'converted.wav') {
    const outputPath = path.join(TMP_DIR, outputName);
    return new Promise((resolve, reject) => {
        ffmpeg(inputPath)
            .outputOptions(['-acodec pcm_s16le', '-ac 1', '-ar 16000'])
            .on('end', () => resolve(outputPath))
            .on('error', (err) => reject(err))
            .save(outputPath);
    });
}
// Divide um WAV em segmentos de `segmentSeconds` segundos
function splitWav(inputWav, segmentSeconds = 20) {
    const outPattern = path.join(TMP_DIR, 'segment-%03d.wav');
    return new Promise((resolve, reject) => {
        ffmpeg(inputWav)
            .outputOptions(['-f segment', `-segment_time ${segmentSeconds}`, '-c copy'])
            .on('end', async () => {
            // listar arquivos gerados
            const files = (await fs.promises.readdir(TMP_DIR))
                .filter((f) => f.startsWith('segment-') && f.endsWith('.wav'))
                .map((f) => path.join(TMP_DIR, f))
                .sort();
            resolve(files);
        })
            .on('error', (err) => reject(err))
            .save(outPattern);
    });
}
function concatWavs(parts, outName = 'combined.wav') {
    const listFile = path.join(TMP_DIR, 'concat-list.txt');
    const outPath = path.join(TMP_DIR, outName);
    const content = parts.map((p) => `file '${p.replace(/\\/g, '/')}'`).join('\n');
    return fs.promises.writeFile(listFile, content).then(() => new Promise((resolve, reject) => {
        ffmpeg()
            .input(listFile)
            .inputOptions(['-f concat', '-safe 0'])
            .outputOptions(['-c copy'])
            .on('end', async () => {
            try {
                // após criar o arquivo combinado, remover os segmentos e o arquivo de lista
                for (const p of parts) {
                    try {
                        await fs.promises.unlink(p);
                    }
                    catch (e) { /* ignore */ }
                }
                try {
                    await fs.promises.unlink(listFile);
                }
                catch (e) { /* ignore */ }
            }
            catch (e) {
                // não falhar o fluxo caso não consiga apagar
            }
            resolve(outPath);
        })
            .on('error', (err) => reject(err))
            .save(outPath);
    }));
}
function clearTmp() {
    const files = fs.readdirSync(TMP_DIR);
    for (const f of files) {
        try {
            fs.unlinkSync(path.join(TMP_DIR, f));
        }
        catch { }
    }
}
