import { useEffect, useState } from "react";

const PageLoader = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm flex items-center justify-center z-[9998] animate-fadeIn">
          <div className="flex flex-col items-center justify-center">
            {/* Animated spinner */}
            <div className="relative w-16 h-16 mb-4">
              <div className="absolute inset-0 rounded-full border-3 border-slate-200 dark:border-slate-800" />
              <div className="absolute inset-0 rounded-full border-3 border-transparent border-t-orange-500 border-r-orange-500 animate-spin" />
            </div>

            <p className="text-slate-600 dark:text-slate-400 font-semibold text-sm">
              Loading page<span className="inline-block animate-bounce ml-1">.</span>
              <span className="inline-block animate-bounce ml-1" style={{ animationDelay: "0.1s" }}>.</span>
              <span className="inline-block animate-bounce ml-1" style={{ animationDelay: "0.2s" }}>.</span>
            </p>
          </div>

          <style>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default PageLoader;
