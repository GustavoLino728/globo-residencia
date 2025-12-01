// src/controllers/watchController.ts
import { startWatch } from "../utils/watchUtils";
import { FastifyRequest, FastifyReply } from "fastify";

export const watchController = async (
  request: FastifyRequest<{ Body: { folderPath?: string } }>,
  reply: FastifyReply
) => {
  const { folderPath } = request.body || {};

  if (!folderPath) {
    return reply.status(400).send({ error: "folderPath é obrigatório" });
  }

  await startWatch(folderPath);

  reply.send({ message: "Watching iniciado", folderPath });
};
