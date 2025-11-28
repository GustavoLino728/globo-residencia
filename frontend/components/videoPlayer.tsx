"use client";

import { useState, useEffect, useRef } from "react";

interface VideoPlayerProps {
    videoURL?: string;
    fileType?: string;
}

export const VideoPlayer = ({ videoURL, fileType }: VideoPlayerProps) => {
    const [hasVideo, setHasVideo] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoURL) {
            setHasVideo(true);
        } else {
            // Tentar carregar do localStorage
            const storedURL = localStorage.getItem("uploadMediaURL");
            const storedType = localStorage.getItem("uploadFileType");
            if (storedURL) {
                setHasVideo(true);
            }
        }
    }, [videoURL]);

    const displayURL = videoURL || localStorage.getItem("uploadMediaURL") || null;
    const displayType = fileType || localStorage.getItem("uploadFileType") || "";

    return (
        <div className="lg:col-span-2 flex items-center">
            <div className="w-full h-full p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl flex items-center justify-center shadow-2xl">
                {hasVideo && displayURL ? (
                    <div className="w-full">
                        {displayType?.startsWith("audio/") ? (
                            <div className="w-full">
                                <h3 className="text-white text-lg font-semibold mb-4 text-center">Áudio Original</h3>
                                <audio 
                                    controls 
                                    className="w-full"
                                    src={displayURL}
                                >
                                    Seu navegador não suporta o elemento de áudio.
                                </audio>
                            </div>
                        ) : (
                            <div className="w-full">
                                <h3 className="text-white text-lg font-semibold mb-4 text-center">Vídeo Original</h3>
                                <div className="w-full rounded-lg overflow-hidden bg-black/20 border border-white/10">
                                    <video 
                                        ref={videoRef}
                                        controls 
                                        className="w-full max-h-[600px] object-contain"
                                        src={displayURL}
                                    >
                                        Seu navegador não suporta o elemento de vídeo.
                                    </video>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M8 5v10l8-5-8-5z"/>
                            </svg>
                        </div>
                        <p className="text-white/80 font-medium">Player de vídeo</p>
                        <p className="text-white/60 text-sm mt-2">Nenhum vídeo carregado</p>
                    </div>
                )}
            </div>
        </div>
    )
}
