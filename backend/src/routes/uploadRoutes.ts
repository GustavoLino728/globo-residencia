import { FastifyInstance } from "fastify";

export default async function uploadRoutes(fastify: FastifyInstance) {
  fastify.post("/", async (request, reply) => {
    const data = await request.file();

    if (!data) {
      return reply.status(400).send({ error: "Nenhum arquivo recebido" });
    }

    const file = await data.toBuffer();

    console.log("📥 Arquivo recebido:", data.filename);
    console.log("📦 Tamanho:", file.length, "bytes");


    return reply.send({
      success: true,
      filename: data.filename,
    });
  });
}
