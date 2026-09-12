"use client";

import { motion } from "framer-motion";

export function FloatingWhatsApp() {
  return (
    <motion.aside
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      aria-label="Direct WhatsApp contact"
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center group pointer-events-auto select-none"
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
          <path d="M12.004 0C5.373 0 0 5.373 0 12c0 2.119.555 4.11 1.524 5.839L.004 24l6.335-1.501C8.01 23.444 9.957 24 12.004 24 18.631 24 24 18.627 24 12c0-6.627-5.369-12-11.996-12zm0 22.025c-1.854 0-3.606-.511-5.112-1.399l-.366-.215-3.793.899.914-3.69-.239-.38A9.972 9.972 0 0 1 2.02 12c0-5.505 4.479-9.985 10.005-9.985 5.505 0 9.985 4.48 9.985 9.985 0 5.525-4.48 10.025-10.006 10.025zm5.485-7.465c-.301-.15-1.78-.878-2.056-.979-.276-.101-.476-.15-.677.15-.201.3-.777.98-.953 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.785-1.676-2.086-.175-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.201-.3.302-.501.1-.2.05-.376-.026-.526-.075-.151-.677-1.631-.928-2.238-.244-.592-.493-.51-.678-.52l-.577-.01c-.201 0-.527.075-.803.376s-1.054 1.029-1.054 2.51c0 1.482 1.08 2.91 1.23 3.111.151.2 2.127 3.248 5.152 4.555.72.31 1.282.496 1.72.636.724.23 1.382.197 1.902.12.58-.087 1.781-.728 2.032-1.431.251-.703.251-1.305.175-1.431-.075-.126-.276-.201-.577-.351z" />
        </svg>
      </motion.a>
    </motion.aside>
  );
}
