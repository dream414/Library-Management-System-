import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const fullText = "Welcome to LMS - Smart Library System";

  // TYPEWRITER EFFECT
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 80);
  }, []);

  // CLICK SOUND
  const playClick = () => {
    const audio = new Audio(
      "https://www.soundjay.com/buttons/sounds/button-16.mp3"
    );
    audio.play();
    navigate("/login");
  };

  return (
    <div className="h-screen w-full bg-black overflow-hidden relative text-white">

      {/* 🌌 PARTICLE BACKGROUND */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-40 animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/40 to-blue-900/50"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">

        {/* TYPEWRITER TEXT */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
          {text}
          <span className="animate-pulse">|</span>
        </h1>

        {/* 3D BOOK EFFECT */}
        <div className="w-64 h-80 perspective mt-6">
          <div className="relative w-full h-full transform-style-preserve-3d animate-spin-slow">

            {/* FRONT */}
            <div className="absolute w-full h-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center text-xl font-bold">
              📚 LMS BOOK
            </div>

            {/* BACK */}
            <div className="absolute w-full h-full bg-blue-500/20 rotate-y-180 rounded-xl flex items-center justify-center">
              Digital Library
            </div>

          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={playClick}
          className="mt-10 px-10 py-3 bg-white/10 border border-white/30 rounded-full backdrop-blur-xl hover:scale-110 transition shadow-xl"
        >
          Enter System
        </button>

      </div>

      {/* CUSTOM ANIMATIONS */}
      <style>{`
        .perspective {
          perspective: 1000px;
        }

        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }

        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
      `}</style>

    </div>
  );
}