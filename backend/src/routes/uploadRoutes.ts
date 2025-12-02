import { FastifyInstance } from "fastify";
import { saveFile } from "../services/fileService"; 

//Recebe  o upload do arquivo e envia para o supabase storage (bucket)
export default async function uploadRoutes(fastify: FastifyInstance) {
  fastify.post("/", async (request, reply) => {
    const data = await request.file();

    if (!data) {
      return reply.status(400).send({ error: "Nenhum arquivo recebido" });
    }

    console.log("Recebendo arquivo:", data.filename);

    try {
      const result = await saveFile(data);

      console.log("Processamento concluído para:", data.filename);

      return reply.send({
        success: true,
        message: "Arquivo enviado e registrado com sucesso",
        file: {
            name: result.fileName,
            url: result.supabaseUrl,
            size: result.fileSize,
            format: result.format,
            dbId: result.idArquivoBanco
        }
      });

    } catch (error: any) {
      console.error("Erro na rota de upload:", error);
      
      return reply.status(500).send({ 
        success: false, 
        error: "Falha ao processar arquivo",
        details: error.message 
      });
    }
  });
}