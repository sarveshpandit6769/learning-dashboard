"use client";

import { motion } from "framer-motion";

export default function ProgressBar({ value }: { value: number }) {
  return (
    <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-white/10">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-lg shadow-purple-500/30"
      />
    </div>
  );
}