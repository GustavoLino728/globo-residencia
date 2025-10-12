export default function ColorBar() {
    return (
      <div className="fixed bottom-0 left-0 w-full h-2 flex z-50">
        <div className="flex-1 bg-yellow-400" />
        <div className="flex-1 bg-orange-500" />
        <div className="flex-1 bg-red-500" />
        <div className="flex-1 bg-pink-500" />
        <div className="flex-1 bg-purple-600" />
        <div className="flex-1 bg-blue-600" />
        <div className="flex-1 bg-sky-400" />
        <div className="flex-1 bg-green-500" />
      </div>
    );
  }