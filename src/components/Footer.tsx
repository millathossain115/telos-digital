"use client";

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-800/80 pt-16 pb-12 relative overflow-hidden">
      {/* Glow background accent */}
      <div className="absolute bottom-0 left-1/2 -tranneutral-x-1/2 w-[800px] h-[300px] bg-white/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800/60">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-100 to-white p-[1px]">
                <div className="w-full h-full bg-neutral-950 rounded-[11px] flex items-center justify-center">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-white text-lg">
                    T
                  </span>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                TELOS <span className="text-amber-500 font-light">DIGITAL</span>
              </span>
            </a>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Empowering global organizations with enterprise-grade cloud architecture, intelligent AI automation, and digital engineering excellence.
            </p>
            <div className="flex items-center gap-4 text-neutral-400 pt-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-white hover:border-neutral-700 hover:bg-neutral-800 transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-white hover:border-neutral-700 hover:bg-neutral-800 transition-colors" aria-label="GitHub">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:text-white hover:border-neutral-700 hover:bg-neutral-800 transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Cloud Migration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI & Automation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">DevOps Pipeline</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Data Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cybersecurity</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press & Media</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Stay Connected</h4>
            <p className="text-xs text-neutral-400 mb-3">Subscribe to product updates and insights.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter work email"
                className="w-full px-3.5 py-2 text-sm bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
              />
              <button
                type="submit"
                className="w-full py-2 px-3 text-xs font-semibold text-black bg-white rounded-lg hover:bg-amber-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Telos Digital Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Security</a>
          </div>
        </div>

        {/* Thematic Big Brand Title (Option 2: Telos Digital calibrated) */}
        <div className="pt-16 pb-4 flex items-center justify-center select-none pointer-events-none overflow-hidden w-full">
          <span className="font-extrabold text-[10.2vw] leading-none tracking-tight sm:tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-800/40 via-neutral-900/30 to-neutral-950/10 text-center uppercase whitespace-nowrap">
            Telos Digital
          </span>
        </div>
      </div>
    </footer>
  );
}
