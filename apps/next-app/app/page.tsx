import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="pt-24 min-h-screen  bg-dot-grid flex flex-col items-center">
      {/* Hero Section */}
      <section className="max-w-5xl w-full px-6 py-20 text-center flex flex-col items-center">
        <div className="inline-block px-4 py-1 border-2 border-black font-bold text-xs mb-6 uppercase tracking-widest bg-brand-accent/20">
          V1.0 is now live
        </div>
        <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-tight mb-6">
          Virtual whiteboard for{" "}
          <span className="text-brand-accent underline decoration-black underline-offset-8">
            modern
          </span>{" "}
          teams.
        </h1>
        <p className="max-w-2xl text-xl font-medium text-gray-700 mb-10">
          Collaborate in real-time with a hand-drawn feel. No signup required to
          start—just open the canvas and share the link.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link href={"/canvas"}>
            <button className="bg-brand-black text-white text-lg px-10 py-4 font-black border-2 border-black shadow-heavy hover:shadow-none transition-all active:translate-x-1 active:translate-y-1">
              START DRAWING
            </button>
          </Link>
          <button className="bg-white text-black text-lg px-10 py-4 font-black border-2 border-black shadow-heavy hover:shadow-none transition-all">
            VIEW DEMO
          </button>
        </div>

        {/* Visual Teaser: The "Canvas Window" */}
        {/* <div className="w-full aspect-video bg-[var(--bg-primary)] border-4 border-black shadow-heavy relative overflow-hidden group"> */}
        {/* Subtle Sketchy Elements floating in background */}
        {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-48 h-48 border-4 border-black rotate-12 -translate-x-20"></div>
          <div className="w-64 h-32 border-4 border-black -rotate-6 translate-x-20 rounded-full"></div>
        </div>

        {/* Central Play Button/Icon */}
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-brand-accent w-20 h-20 rounded-full border-4 border-black flex items-center justify-center shadow-heavy group-hover:scale-110 transition-transform">
            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
          </div>
        </div>
        </div> */}
      </section>

      {/* Feature Bento Grid (Brief) */}
      <section className="bg-brand-black w-full py-8 px-6 text-white border-t-4 border-black">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border-2 border-white/20 hover:border-brand-accent transition-colors">
            <h3 className="text-2xl font-black mb-4">Real-time</h3>
            <p className="font-medium text-gray-400">
              Low-latency WebSockets ensure your team stays in sync without the
              lag.
            </p>
          </div>
          <div className="p-8 border-2 border-white/20 hover:border-brand-accent transition-colors">
            <h3 className="text-2xl font-black mb-4">Encrypted</h3>
            <p className="font-medium text-gray-400">
              Your data belongs to you. End-to-end encryption for every sketch.
            </p>
          </div>
          <div className="p-8 border-2 border-white/20 hover:border-brand-accent transition-colors">
            <h3 className="text-2xl font-black mb-4">Exportable</h3>
            <p className="font-medium text-gray-400">
              Save as PNG, SVG, or share a live link that anyone can view.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
