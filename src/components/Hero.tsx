export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-950 text-slate-100">
      {/* Background Decorative Mesh Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/10 blur-[130px] rounded-full" />
        <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-10 -right-32 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        {/* Announce Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-mono tracking-tight mb-8 backdrop-blur-md shadow-inner">
          <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
          <span>Next Generation Digital Solutions</span>
          <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight sm:tracking-tighter max-w-5xl leading-[1.08] text-white">
          Architecting the Future of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-400">
            Digital Transformation
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-3xl font-normal leading-relaxed">
          Empowering enterprises with intelligent automation, cloud-native architectures, and bespoke software experiences engineered for scalability.
        </p>

        {/* Hero CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#explore"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 gap-2"
          >
            Start Building
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7M3 12h18" />
            </svg>
          </a>
          <a
            href="#demo"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-300 bg-slate-900/80 border border-slate-800 rounded-xl hover:bg-slate-800 hover:text-white hover:border-slate-700 transition-all duration-300 gap-2"
          >
            <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Demo
          </a>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 pt-8 border-t border-slate-800/80 w-full max-w-4xl">
          <div>
            <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight tabular-nums">99.99%</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Uptime SLA</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight tabular-nums">10x</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Deployment Speed</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight tabular-nums">250M+</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">API Requests/Day</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold font-mono text-white tracking-tight tabular-nums">4.9/5</div>
            <div className="text-xs sm:text-sm text-slate-400 mt-1">Enterprise Rating</div>
          </div>
        </div>

        {/* Visual Hero Showcase Card */}
        <div className="mt-16 w-full max-w-5xl rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/40 p-2 sm:p-3 border border-slate-700/50 backdrop-blur-xl shadow-2xl shadow-indigo-950/50">
          <div className="rounded-xl bg-slate-950 p-4 sm:p-6 overflow-hidden border border-slate-800/80">
            {/* Header bar of window */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-500">telos-cloud-dashboard v2.4</span>
              </div>
              <span className="text-xs font-mono px-2 py-1 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/50">
                LIVE METRICS
              </span>
            </div>

            {/* Dashboard Mock Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 flex flex-col gap-2">
                <span className="text-xs font-mono text-slate-400">Total Throughput</span>
                <span className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">1.42 GB/s</span>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-1">
                  <div className="bg-emerald-400 h-full w-[78%]" />
                </div>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 flex flex-col gap-2">
                <span className="text-xs font-mono text-slate-400">Active Microservices</span>
                <span className="text-2xl font-bold font-mono text-cyan-400 tabular-nums">128 Healthy</span>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-1">
                  <div className="bg-cyan-400 h-full w-[95%]" />
                </div>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 flex flex-col gap-2">
                <span className="text-xs font-mono text-slate-400">Response Latency</span>
                <span className="text-2xl font-bold font-mono text-indigo-400 tabular-nums">12 ms avg</span>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-1">
                  <div className="bg-indigo-400 h-full w-[88%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
