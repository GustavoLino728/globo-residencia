// src/routes/watchRoutes.ts
import { watchController } from "../controllers/watchController";
import { FastifyInstance } from "fastify";

export default async function watchRoutes(fastify: FastifyInstance) {
  fastify.post("/start-watch", watchController);
}
