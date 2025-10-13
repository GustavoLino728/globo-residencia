"use client";

import { useParams } from "next/navigation";
import MusicInfoCard, { MusicInfo } from "@/components/validationCard";

// Dados de exemplo para demonstração
const sampleMusicData: Record<string, MusicInfo> = {
  "1": {
    musica: "Bohemian Rhapsody",
    efeitoSonoro: "Reverb suave",
    artista: "Queen",
    interprete: "Freddie Mercury",
    gravadora: "EMI Records",
    tempoInicio: "00:15",
    tempoFim: "03:45",
    isrc: "GBUM71029678",
    tempoTotal: "05:55"
  },
  "2": {
    musica: "Imagine",
    efeitoSonoro: "Piano natural",
    artista: "John Lennon",
    interprete: "John Lennon",
    gravadora: "Apple Records",
    tempoInicio: "00:00",
    tempoFim: "03:07",
    isrc: "USRC17607839",
    tempoTotal: "03:07"
  },
  "3": {
    musica: "Billie Jean",
    efeitoSonoro: "Bass sintético",
    artista: "Michael Jackson",
    interprete: "Michael Jackson",
    gravadora: "Epic Records",
    tempoInicio: "00:30",
    tempoFim: "04:54",
    isrc: "USUM70903642",
    tempoTotal: "04:54"
  }
};

export default function ValidandoPage() {
  const params = useParams();
  const id = params.validando as string;

  // Busca os dados da música baseado no ID da rota
  const musicInfo = sampleMusicData[id];

  // if (!musicInfo) {
  //   return (
  //     <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
  //       <div className="mb-4">
  //         <h2 className="text-2xl font-semibold text-foreground mb-2">
  //           Conteúdo não encontrado
  //         </h2>
  //         <p className="text-muted-foreground">
  //           O ID "{id}" não corresponde a nenhuma validação disponível.
  //         </p>
  //       </div>
  //       <div className="mt-4">
  //         <p className="text-sm text-muted-foreground mb-2">
  //           IDs disponíveis para teste:
  //         </p>
  //         <div className="flex gap-2 flex-wrap justify-center">
  //           {Object.keys(sampleMusicData).map((availableId) => (
  //             <span
  //               key={availableId}
  //               className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm"
  //             >
  //               {availableId}
  //             </span>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">
            Validação #{id}
          </h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Aprovar
            </button>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              Rejeitar
            </button>
          </div>
        </div>
        <p className="text-muted-foreground">
          Informações musicais detectadas automaticamente que precisam ser validadas.
        </p>
      </div>

      <div className="grid gap-6">
        <MusicInfoCard info={musicInfo} />
        
        <div className="bg-card border rounded-lg p-6">
          <h3 className="text-lg font-semibold text-card-foreground mb-4">
            Ações de Validação
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-card-foreground mb-2">
                Comentários (opcional)
              </label>
              <textarea
                className="w-full p-3 border rounded-lg bg-background text-foreground"
                rows={3}
                placeholder="Adicione comentários sobre a validação..."
              />
            </div>
            <div className="flex gap-3">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Salvar Rascunho
              </button>
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                Finalizar Validação
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
