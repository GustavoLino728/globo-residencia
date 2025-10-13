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
}


const MusicInfoCard = ({ info }: MusicInfoCardProps) => {
  // Verificação de segurança para evitar erros
  if (!info) {
    return (
      <Card className="w-full bg-card border-none shadow-xl">
        <CardBody className="p-6">
          <div className="text-center text-muted-foreground">
            <p>Nenhuma informação musical disponível.</p>
          </div>
        </CardBody>
      </Card>
    );
  }

  return (
    <Card className="w-full bg-card border-none shadow-xl">
      <CardBody className="p-6">
        <div className="space-y-3">
          <InfoRow label="Música" value={info.musica || "N/A"} highlight />
          <InfoRow label="Efeito sonoro" value={info.efeitoSonoro || "N/A"} />
          <InfoRow label="Artista" value={info.artista || "N/A"} />
          <InfoRow label="Interprete" value={info.interprete || "N/A"} />
          <InfoRow label="Gravadora" value={info.gravadora || "N/A"} />
          
          <div className="pt-2">
            <p className="text-sm font-semibold text-card-foreground mb-2">
              Tempo de Reprodução:
            </p>
            <div className="pl-4 space-y-1">
              <InfoRow label="• Início" value={info.tempoInicio || "N/A"} small />
              <InfoRow label="• Fim" value={info.tempoFim || "N/A"} small />
            </div>
          </div>
          
          <InfoRow label="ID de Registro(ISRC)" value={info.isrc || "N/A"} />
          <InfoRow label="Tempo total do fonograma" value={info.tempoTotal || "N/A"} />
        </div>
      </CardBody>
    </Card>
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
    <div className={small ? "text-xs" : "text-sm"}>
    <span className={`font-semibold ${highlight ? 'text-base' : ''} text-card-foreground`}>
        {label}:
    </span>{" "}
    <span className="text-card-foreground/80">{value}</span>
    </div>
);
};

export default MusicInfoCard;
