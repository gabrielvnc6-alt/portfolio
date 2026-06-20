"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";

// Add more result pages here — the carousel handles any number of them.
const resultPages = [
  {
    id: "tiktok",
    label: "TikTok",
    image: "/results-tiktok.png",
    alt: "Before and after: @portrasdoretrato1 grew from 0 to 7,605 followers on TikTok",
    stats: [
      { value: "0 → 7,605", label: "Followers from scratch" },
      { value: "119.7K", label: "Total likes" },
    ],
  },
  {
    id: "instagram",
    label: "Instagram",
    image: "/results-instagram.png",
    alt: "Before and after: @portrasdoretrato1 grew from 0 to 4,511 followers on Instagram",
    stats: [
      { value: "0 → 4,511", label: "Followers from scratch" },
      { value: "75", label: "Posts published" },
    ],
  },
] as const;

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = resultPages.length;
  const current = resultPages[index];

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + total) % total);
  };

  return (
    <section id="results" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Real Results
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold">
            Growth That Speaks for Itself
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            Brand-new accounts I edit for —{" "}
            <span className="text-foreground/80">@portrasdoretrato1</span> — went
            from zero to thousands of followers across TikTok and Instagram.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-border bg-card p-3 overflow-hidden"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={current.id}
                src={current.image}
                alt={current.alt}
                initial={{ opacity: 0, x: direction >= 0 ? 24 : -24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -24 : 24 }}
                transition={{ duration: 0.3 }}
                className="w-full h-auto rounded-xl"
                loading="lazy"
              />
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-6">
              <TrendingUp size={18} />
              {current.label} case study
            </div>

            <div className="space-y-5 min-h-[180px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-5"
                >
                  {current.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-baseline gap-4 border-b border-border pb-5"
                    >
                      <span className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-accent shrink-0">
                        {stat.value}
                      </span>
                      <span className="text-muted text-sm">{stat.label}</span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="text-foreground/70 mt-6 leading-relaxed">
              Consistent short-form editing — sharp pacing, clean captions, and
              scroll-stopping hooks — turned fresh pages into fast-growing
              audiences. This is the kind of growth I edit for.
            </p>

            {/* Carousel controls */}
            {total > 1 && (
              <div className="flex items-center gap-4 mt-8">
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous result"
                  className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
                >
                  <ChevronLeft size={20} />
                </button>

                <div className="flex items-center gap-2">
                  {resultPages.map((page, i) => (
                    <button
                      key={page.id}
                      onClick={() => {
                        setDirection(i > index ? 1 : -1);
                        setIndex(i);
                      }}
                      aria-label={`Go to ${page.label} result`}
                      className={`h-2 rounded-full transition-all duration-200 ${
                        i === index
                          ? "w-6 bg-accent"
                          : "w-2 bg-border hover:bg-black/20"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => go(1)}
                  aria-label="Next result"
                  className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
                >
                  <ChevronRight size={20} />
                </button>

                <span className="text-muted text-xs ml-auto tabular-nums">
                  {index + 1} / {total}
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
