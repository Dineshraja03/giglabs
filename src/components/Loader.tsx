import { useEffect, useState } from "react";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loader after 2 seconds on initial load
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center z-[9999] transition-opacity duration-500">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      {/* Loader content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Logo or brand name */}
        <div className="mb-12">
          <h1 className="text-5xl font-black text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text">
            Giglabs
          </h1>
        </div>

        {/* Animated spinner */}
        <div className="relative w-24 h-24 mb-8">
          {/* Outer rotating circle */}
          <div className="absolute inset-0 rounded-full border-4 border-slate-200 dark:border-slate-800" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-500 border-r-orange-500 animate-spin" />

          {/* Inner pulsing circle */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-0 animate-pulse" />
        </div>

        {/* Loading text */}
        <p className="text-slate-600 dark:text-slate-400 font-semibold text-center">
          Loading<span className="inline-block animate-bounce ml-1">.</span>
          <span className="inline-block animate-bounce ml-1" style={{ animationDelay: "0.1s" }}>.</span>
          <span className="inline-block animate-bounce ml-1" style={{ animationDelay: "0.2s" }}>.</span>
        </p>

        {/* Progress bar */}
        <div className="mt-8 w-48 h-1 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse" style={{
            animation: "slideX 2s ease-in-out infinite",
          }} />
        </div>

        <style>{`
          @keyframes slideX {
            0% {
              transform: translateX(-100%);
            }
            50% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Loader;
