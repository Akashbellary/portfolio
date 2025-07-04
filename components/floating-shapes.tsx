"use client"

export function FloatingShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float-slow" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/10 rotate-45 animate-float-medium" />
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-500/10 rounded-full animate-float-fast" />
      <div className="absolute bottom-20 right-40 w-18 h-18 bg-cyan-500/10 rotate-12 animate-float-slow" />
      <div className="absolute top-60 left-1/3 w-14 h-14 bg-violet-500/10 rounded-full animate-float-medium" />
      <div className="absolute top-80 right-1/3 w-22 h-22 bg-blue-400/10 rotate-45 animate-float-fast" />

      {/* Additional smaller shapes */}
      <div className="absolute top-32 left-1/2 w-8 h-8 bg-purple-400/20 rounded-full animate-float-slow delay-1000" />
      <div className="absolute bottom-60 left-1/4 w-12 h-12 bg-blue-300/15 rotate-45 animate-float-medium delay-2000" />
      <div className="absolute top-96 right-1/4 w-10 h-10 bg-indigo-400/20 rounded-full animate-float-fast delay-1500" />
    </div>
  )
}
