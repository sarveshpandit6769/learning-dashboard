"use client";

import { motion } from "framer-motion";
import { BookOpen, LayoutDashboard, Settings, TrendingUp } from "lucide-react";
import { useState } from "react";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Courses", icon: BookOpen },
  { name: "Progress", icon: TrendingUp },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <aside className="hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 backdrop-blur-xl lg:block lg:min-h-[600px]">
      <h2 className="text-xl font-bold text-white">LearnX</h2>

      <nav className="mt-8 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className="relative flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-zinc-400"
            >
              {active === item.name && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 rounded-xl bg-purple-500/15"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                />
              )}

              <Icon className="relative z-10" size={20} />
              <span className="relative z-10">{item.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}