export interface VideoInfo {
  id: string;
  thumbnail: string;
  title: string;
  duration: string;
}

export const notFinishedVideos: VideoInfo[] = [
    {
      id: "queen-show-c96c4a85",
      thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=225&fit=crop",
      title: "Entrevista ao vivo com especialista em tecnologia",
      duration: "45:12",
    },
    {
      id: "john-lennon-2a1b7e0d",
      thumbnail: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=400&h=225&fit=crop",
      title: "Análise das últimas notícias do mercado",
      duration: "28:45",
    },
    {
      id: "michael-j-f7d3c9b1",
      thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&h=225&fit=crop",
      title: "Debate sobre economia global",
      duration: "52:30",
    },
    {
      id: "4",
      thumbnail: "https://images.unsplash.com/photo-1560439513-74b037a25d84?w=400&h=225&fit=crop",
      title: "Cobertura especial de eventos corporativos",
      duration: "35:18",
    },
    {
      id: "5",
      thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=225&fit=crop",
      title: "Transmissão ao vivo do estúdio",
      duration: "41:05",
  },
];

export const finishedVideos: VideoInfo[] = [
    {
      id: "6",
      thumbnail: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=225&fit=crop",
      title: "Reportagem completa sobre inovação",
      duration: "18:22",
    },
    {
      id: "7",
      thumbnail: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=400&h=225&fit=crop",
      title: "Entrevista exclusiva com CEO",
      duration: "25:40",
    },
    {
      id: "8",
      thumbnail: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=400&h=225&fit=crop",
      title: "Documentário sobre transformação digital",
      duration: "42:15",
    },
    {
      id: "9",
      thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=225&fit=crop",
      title: "Mesa redonda sobre liderança",
      duration: "33:50",
    },
    {
      id: "10",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=225&fit=crop",
      title: "Seminário de estratégia empresarial",
    duration: "55:12",
  },
];
