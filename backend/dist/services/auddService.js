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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUDD_CONFIG = void 0;
exports.identifyAudioByFile = identifyAudioByFile;
const axios_1 = __importDefault(require("axios"));
const fs = __importStar(require("fs"));
const form_data_1 = __importDefault(require("form-data"));
// Configure seu token do audd e quaisquer parâmetros padrão aqui
exports.AUDD_CONFIG = {
    // TOKEN FIXO EM CÓDIGO (conforme solicitado).
    // Se quiser trocar, altere aqui.
    token: 'fef661ca7836bd9cef7b4bd669f3feda',
    // Example: return 'lyrics' or 'accurate' or other flags the API supports
    params: {
        return: 'timecode,apple_music,deezer'
    }
};
// Esta função mostra onde configurar o corpo da requisição para audd.
// Você pode modificar as chamadas `form.append()` para enviar outros campos para audd.io.
async function identifyAudioByFile(filePath) {
    const form = new form_data_1.default();
    form.append('api_token', exports.AUDD_CONFIG.token);
    // local para configurar parâmetros adicionais/corpo
    // ex.: form.append('return', 'timecode,apple_music');
    form.append('return', exports.AUDD_CONFIG.params.return || 'timecode');
    form.append('file', fs.createReadStream(filePath));
    const headers = form.getHeaders();
    const res = await axios_1.default.post('https://api.audd.io/', form, { headers });
    return res.data; // resposta crua do audd
}
