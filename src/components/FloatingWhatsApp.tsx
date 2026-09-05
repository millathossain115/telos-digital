"use client";

import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  return (
    <motion.aside
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Direct WhatsApp contact"
      className="fixed bottom-6 right-6 z-50 flex items-center group pointer-events-auto select-none"
    >
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 mr-3 rounded-full bg-[#141312] text-white text-xs font-mono tracking-tight shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        <span>Chat on WhatsApp</span>
      </span>

      {/* Floating Action Button with slow, gentle levitation motion */}
      <motion.a
        href="https://wa.me/8801610108851"
        target="_blank"
        rel="noreferrer"
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.35)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.5)] transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-400/30 cursor-pointer"
        aria-label="Chat with Telos Digital on WhatsApp at +880 1610-108851"
      >
        {/* Soft slow ambient breathing aura */}
        <motion.span
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.35, 0, 0.35],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full bg-[#25D366] pointer-events-none -z-10"
        />

        <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-xs" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.477-.15-.678.15-.201.3-.778.98-.954 1.18-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.176-.3-.019-.462.132-.612.136-.135.301-.351.452-.527.15-.175.2-.3.301-.5.101-.2.05-.376-.025-.526-.075-.15-.678-1.634-.929-2.239-.244-.589-.493-.509-.678-.519l-.578-.01c-.201 0-.527.075-.803.376s-1.055 1.03-1.055 2.512c0 1.482 1.08 2.912 1.23 3.113.15.2 2.126 3.246 5.15 4.553.72.31 1.282.496 1.72.636.724.23 1.382.197 1.902.12.58-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.432-.076-.125-.276-.2-.577-.35zm-5.421 7.403c-2.006 0-3.968-.539-5.69-1.56l-.408-.242-4.224 1.108 1.127-4.118-.266-.423c-1.121-1.784-1.713-3.856-1.713-5.978 0-6.16 5.013-11.172 11.174-11.172 2.984 0 5.789 1.162 7.898 3.272s3.272 4.914 3.272 7.899c0 6.161-5.012 11.172-11.17 11.172zm9.516-20.688c-2.542-2.544-5.922-3.945-9.516-3.945-7.414 0-13.447 6.033-13.447 13.447 0 2.37.618 4.683 1.792 6.721l-1.903 6.953 7.114-1.865c1.97 1.074 4.195 1.639 6.444 1.639 7.415 0 13.447-6.033 13.447-13.447 0-3.593-1.399-6.973-3.941-9.518z"/>
        </svg>
      </motion.a>
    </motion.aside>
  );
}
