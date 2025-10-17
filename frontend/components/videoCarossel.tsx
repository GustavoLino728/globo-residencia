"use client"
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@heroui/button";
import VideoCard from "./videoCard";
import { useRef } from "react";

interface Video {
  id: string;
  thumbnail: string;
  title: string;
  duration?: string;
}

interface VideoCarouselProps {
  title: string;
  videos: Video[];
  onVideoClick?: (id: string, title: string) => void;
}

const VideoCarousel = ({ title, videos, onVideoClick }: VideoCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-4">
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        <div className="flex items-center gap-2">
          <Button 
            variant="light" 
            size="sm"
            color="secondary"
            className="bg-white/3"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-5 w-5 transition-colors text-white" />
          </Button>
          <Button 
            variant="light" 
            size="sm"
            className="bg-white/3"
            color="secondary"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-5 w-5 transition-colors text-white" />
          </Button>
        </div>
      </div>

      <div className="relative group">
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              id={video.id}
              thumbnail={video.thumbnail}
              title={video.title}
              duration={video.duration}
              onClick={onVideoClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoCarousel;
