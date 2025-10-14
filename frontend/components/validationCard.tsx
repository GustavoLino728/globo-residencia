import {Card, CardBody} from "@heroui/card"

export interface MusicInfo {
    musica: string;
    efeitoSonoro: string;
    artista: string;
    interprete: string;
    gravadora: string;
    tempoInicio: string;
    tempoFim: string;
    isrc: string;
    tempoTotal: string;
  }
  
interface MusicInfoCardProps {
  info: MusicInfo;
  validationStatus?: 'approved' | 'rejected';
}


const MusicInfoCard = ({ info, validationStatus }: MusicInfoCardProps) => {
  // Verificação de segurança para evitar erros
  if (!info) {
    return (
      <div className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl">
        <div className="p-6">
          <div className="text-center text-white/60">
            <p>Nenhuma informação musical disponível.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full bg-white/5 backdrop-blur-sm border rounded-2xl shadow-2xl ${
      validationStatus === 'approved' 
        ? 'border-green-500/50' 
        : validationStatus === 'rejected'
        ? 'border-red-500/50'
        : 'border-white/10'
    }`}>
      <div className="p-6">
        <div className="text-white space-y-4">
          {validationStatus && (
            <div className={`mb-4 text-sm font-medium ${
              validationStatus === 'approved' ? 'text-green-400' : 'text-red-400'
            }`}>
              Status: {validationStatus === 'approved' ? 'Aprovada' : 'Rejeitada'}
            </div>
          )}
          <InfoRow label="Música" value={info.musica || "N/A"} highlight />
          <InfoRow label="Efeito sonoro" value={info.efeitoSonoro || "N/A"} />
          <InfoRow label="Artista" value={info.artista || "N/A"} />
          <InfoRow label="Interprete" value={info.interprete || "N/A"} />
          <InfoRow label="Gravadora" value={info.gravadora || "N/A"} />
          
          <div className="pt-3 border-t border-white/10">
            <p className="text-sm font-semibold text-white mb-3">
              Tempo de Reprodução:
            </p>
            <div className="pl-4 space-y-2">
              <InfoRow label="• Início" value={info.tempoInicio || "N/A"} small />
              <InfoRow label="• Fim" value={info.tempoFim || "N/A"} small />
            </div>
          </div>
          
          <InfoRow label="ID de Registro(ISRC)" value={info.isrc || "N/A"} />
          <InfoRow label="Tempo total do fonograma" value={info.tempoTotal || "N/A"} />
        </div>
      </div>
    </div>
  );
};

interface InfoRowProps {
label: string;
value: string;
highlight?: boolean;
small?: boolean;
}

const InfoRow = ({ label, value, highlight, small }: InfoRowProps) => {
return (
    <div className={small ? "text-sm" : "text-base"}>
    <span className={`font-semibold ${highlight ? 'text-lg' : ''} text-white`}>
        {label}:
    </span>{" "}
    <span className="text-white/80">{value}</span>
    </div>
);
};

export default MusicInfoCard;
