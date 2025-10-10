"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queue = void 0;
exports.enqueue = enqueue;
const p_queue_1 = __importDefault(require("p-queue"));
// Configurar concorrência para requisições de saída ao audd.io
exports.queue = new p_queue_1.default({ concurrency: 2 });
function enqueue(fn) {
    return exports.queue.add(fn);
}
