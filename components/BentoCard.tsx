"use client";

import { motion } from "framer-motion";

export default function BentoCard({
  children,
  className = "",
}: any) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 24,
      }}
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-500/10 before:via-transparent before:to-blue-500/10 before:opacity-60 hover:border-purple-400/50 ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </motion.article>
  );
}