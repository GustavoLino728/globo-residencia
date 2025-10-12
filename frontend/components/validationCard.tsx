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
return (
    <Card className="w-full bg-card border-none shadow-xl">
    <CardBody className="p-6">
        <div className="space-y-3">
        <InfoRow label="Música" value={info.musica} highlight />
        <InfoRow label="Efeito sonoro" value={info.efeitoSonoro} />
        <InfoRow label="Artista" value={info.artista} />
        <InfoRow label="Interprete" value={info.interprete} />
        <InfoRow label="Gravadora" value={info.gravadora} />
        
        <div className="pt-2">
            <p className="text-sm font-semibold text-card-foreground mb-2">
            Tempo de Reprodução:
            </p>
            <div className="pl-4 space-y-1">
            <InfoRow label="• Início" value={info.tempoInicio} small />
            <InfoRow label="• Fim" value={info.tempoFim} small />
            </div>
        </div>
        
        <InfoRow label="ID de Registro(ISRC)" value={info.isrc} />
        <InfoRow label="Tempo total do fonograma" value={info.tempoTotal} />
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
