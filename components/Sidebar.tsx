"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  TrendingUp,
  Settings,
} from "lucide-react";
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
    <>
      <aside className="hidden rounded-3xl border border-white/10 bg-zinc-950/80 p-6 backdrop-blur-xl lg:block">
        <h2 className="text-2xl font-bold text-white">LearnX</h2>

        <nav className="mt-10 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                onClick={() => setActive(item.name)}
                className="relative flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-zinc-400"
              >
                {active === item.name && (
                  <motion.div
                    layoutId="desktop-active-tab"
                    className="absolute inset-0 rounded-2xl bg-purple-500/15"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 25,
                    }}
                  />
                )}

                <Icon size={20} className="relative z-10" />

                <span className="relative z-10">
                  {item.name}
                </span>
              </button>
            );
          })}
        </nav>
      </aside>

      <nav className="fixed bottom-4 left-4 right-4 z-50 flex items-center justify-around rounded-3xl border border-white/10 bg-zinc-950/90 p-3 backdrop-blur-xl lg:hidden">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className="relative flex flex-col items-center gap-1 rounded-2xl px-3 py-2 text-xs text-zinc-400"
            >
              {active === item.name && (
                <motion.div
                  layoutId="mobile-active-tab"
                  className="absolute inset-0 rounded-2xl bg-purple-500/20"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                />
              )}

              <Icon size={20} className="relative z-10" />

              <span className="relative z-10">
                {item.name}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}