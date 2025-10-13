"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const multipart_1 = __importDefault(require("@fastify/multipart"));
const fileRoutes_1 = __importDefault(require("./routes/fileRoutes"));
const fastify = (0, fastify_1.default)({ logger: true, bodyLimit: 1024 * 1024 * 1024 }); // limite de corpo 1GB
// Aceitar corpos binários (raw) para tipos application/octet-stream e audio/video
fastify.addContentTypeParser('application/octet-stream', { parseAs: 'buffer' }, function (req, body, done) {
    done(null, body);
});
fastify.addContentTypeParser(/^audio\/.*/, { parseAs: 'buffer' }, function (req, body, done) {
    done(null, body);
});
fastify.addContentTypeParser(/^video\/.*/, { parseAs: 'buffer' }, function (req, body, done) {
    done(null, body);
});
// Configurar multipart para stream de arquivos e permitir uploads grandes (ajuste limites se necessário)
fastify.register(multipart_1.default, {
    attachFieldsToBody: false,
    limits: {
        fileSize: 1024 * 1024 * 1024, // 1GB per file
        files: 10
    }
});
fastify.register(fileRoutes_1.default);
fastify.listen({ port: 8000 }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Servidor rodando na porta 8000`);
});
