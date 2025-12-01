import { FastifyInstance } from "fastify";
// 👇 IMPORTANTE: Ajuste o caminho para onde você salvou a função 'saveFile' corrigida
import { saveFile } from "../services/fileService"; 

export default async function uploadRoutes(fastify: FastifyInstance) {
  fastify.post("/", async (request, reply) => {
    // 1. Recebe o stream do arquivo (MultipartFile)
    const data = await request.file();

    if (!data) {
      return reply.status(400).send({ error: "Nenhum arquivo recebido" });
    }

    console.log("📥 Recebendo arquivo:", data.filename);

    try {
      // 2. Chama a função poderosa que criamos (saveFile)
      // Ela vai: ler o buffer, enviar pro Supabase, salvar local se falhar, e registrar no Banco via insertArquivoMidia
      const result = await saveFile(data);

      console.log("✅ Processamento concluído para:", data.filename);

      // 3. Retorna o sucesso com os dados reais (URL, IDs, etc)
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
      console.error("❌ Erro na rota de upload:", error);
      
      // Retorna erro 500 com a mensagem
      return reply.status(500).send({ 
        success: false, 
        error: "Falha ao processar arquivo",
        details: error.message 
      });
    }
  });
}