export default function VideoPlayer() {
  return (
    <div className="w-full h-150 bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl flex items-center justify-center shadow-2xl">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8 5v10l8-5-8-5z"/>
          </svg>
        </div>
        <p className="text-white/80 font-medium">Player de vídeo</p>
      </div>
    </div>
  );
}