export default function ParticleBg() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-900 via-purple-900 to-black opacity-90">
      <div className="absolute w-full h-full animate-pulse opacity-20">
        <div className="w-2 h-2 bg-white rounded-full absolute top-10 left-10 animate-bounce"></div>
        <div className="w-2 h-2 bg-blue-400 rounded-full absolute top-40 left-80 animate-ping"></div>
        <div className="w-2 h-2 bg-purple-400 rounded-full absolute top-60 left-40 animate-pulse"></div>
      </div>
    </div>
  );
}