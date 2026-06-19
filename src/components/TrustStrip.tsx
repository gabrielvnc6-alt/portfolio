"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
// Inline SVG icons since lucide-react doesn't include platform logos

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.97a8.24 8.24 0 0 0 4.76 1.51V7.03a4.83 4.83 0 0 1-1-.34Z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#0A0A0A"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

const platforms = [
  { name: "YouTube", icon: <YoutubeIcon className="w-7 h-7" /> },
  { name: "TikTok", icon: <TikTokIcon className="w-7 h-7" /> },
  { name: "Instagram", icon: <InstagramIcon className="w-7 h-7" /> },
  { name: "Fiverr", icon: <span className="text-xl font-bold">fiverr</span> },
  { name: "Upwork", icon: <span className="text-xl font-bold">Upwork</span> },
];

const stats = [
  { label: "Years Experience", value: 5 },
  { label: "Videos Edited", value: 500 },
  { label: "Views Generated", value: 50, suffix: "M+" },
  { label: "Happy Clients", value: 120 },
];

function AnimatedCounter({
  value,
  suffix = "+",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = duration / value;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-foreground">
      {count}
      {count >= value ? suffix : ""}
    </span>
  );
}

export default function TrustStrip() {
  return (
    <section id="trust" className="py-20 md:py-28 border-y border-border">
      {/* Logo marquee */}
      <div className="relative overflow-hidden mb-16">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <motion.div
          animate={{ x: [0, -600] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex items-center gap-16 whitespace-nowrap"
        >
          {[...platforms, ...platforms, ...platforms].map((p, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-muted opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              {p.icon}
              <span className="text-lg font-medium">{p.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <AnimatedCounter value={stat.value} suffix={stat.suffix || "+"} />
            <p className="text-muted text-sm mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
