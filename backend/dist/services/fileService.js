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
exports.saveFile = saveFile;
const promises_1 = require("stream/promises");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
// Caminho para a pasta onde os arquivos serão armazenados
const UPLOAD_DIR = path.join(process.cwd(), 'uploads');
// Garante que a pasta 'uploads' existe
if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR);
}
async function saveFile(file) {
    // Gerar caminho completo para salvar o arquivo
    const filePath = path.join(UPLOAD_DIR, file.filename);
    // Criar write stream para salvar o arquivo
    const writeStream = fs.createWriteStream(filePath);
    // Usar pipeline para transferir corretamente os dados do upload para o disco
    await (0, promises_1.pipeline)(file.file, writeStream);
    return filePath; // Retorna o caminho salvo
}
