"use client"

export function LoadingAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm z-50 rounded-lg">
      <div className="flex flex-col items-center gap-4">
        {/* Loading Dots */}
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-slate-600 dark:bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 bg-slate-600 dark:bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 bg-slate-600 dark:bg-slate-400 rounded-full animate-bounce"></div>
        </div>

        {/* Loading Text */}
        <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Loading...</p>
      </div>
    </div>
  )
}
