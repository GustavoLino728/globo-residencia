"use client";
import { Play } from "lucide-react";

interface VideoCardProps {
  id?: string;
  thumbnail: string;
  title: string;
  duration?: string;
  onClick?: (id: string, title: string) => void;
}

const VideoCard = ({ id, thumbnail, title, duration = "12:34", onClick }: VideoCardProps) => {
  const handleClick = () => {
    if (id && onClick) {
      onClick(id, title);
    }
  };

  return (
    <div 
      className="group/card relative flex-shrink-0 w-64 cursor-pointer"
      onClick={handleClick}
    >
       <div className="relative overflow-hidden rounded-xl bg-[hsl(var(--video-card-background))] transition-all duration-300 group-hover/card:bg-[hsl(var(--video-card-hover))] group-hover/card:scale-105 group-hover/card:shadow-2xl group-hover/card:shadow-white/20">
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover/card:scale-110"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center transform scale-75 group-hover/card:scale-100 transition-transform duration-300">
              <Play className="h-6 w-6 text-background ml-1" fill="currentColor" />
            </div>
          </div>

          {/* Duration badge */}
          <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium">
            {duration}
          </div>
        </div>
      </div>
      
      <div className="mt-3 px-1">
      <h3 className="text-sm font-medium line-clamp-2 text-foreground group-hover/card:text-white transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default VideoCard;
