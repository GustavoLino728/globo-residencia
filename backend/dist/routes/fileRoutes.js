"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fileService_1 = require("../services/fileService");
const audioController_1 = __importDefault(require("../controllers/audioController"));
async function fileRoutes(fastify) {
    // existing multipart upload
    fastify.post('/upload', async (request, reply) => {
        const data = await request.file();
        if (!data) {
            return reply.status(400).send({ error: 'Nenhum arquivo enviado' });
        }
        const savedPath = await (0, fileService_1.saveFile)(data);
        return { message: 'Arquivo salvo com sucesso', path: savedPath };
    });
    // New endpoint: receive base64 MXF via JSON, analyze and return results
    fastify.post('/buscaAudD', audioController_1.default.buscaAudDHandler);
}
exports.default = fileRoutes;
