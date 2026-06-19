"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp } from "lucide-react";

const stats = [
  { value: "0 → 7,591", label: "Followers in 30 days" },
  { value: "119.5K", label: "Total likes" },
  { value: "30 days", label: "From a brand-new account" },
];

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Real Results
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold">
            Growth That Speaks for Itself
          </h2>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            A brand-new TikTok account I edit for —{" "}
            <span className="text-foreground/80">@portrasdoretrato1</span> — went
            from zero to thousands of followers in a single month.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-border bg-card p-3 overflow-hidden"
          >
            <img
              src="/tiktok-growth-before-after.png"
              alt="Before and after: @portrasdoretrato1 grew from 0 to 7,591 followers in 30 days"
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-6">
              <TrendingUp size={18} />
              30-day case study
            </div>
            <div className="space-y-5">
              {stats.map((stat) => (
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
            </div>
            <p className="text-foreground/70 mt-6 leading-relaxed">
              Consistent short-form editing — sharp pacing, clean captions, and
              scroll-stopping hooks — turned a fresh page into a fast-growing
              audience. This is the kind of growth I edit for.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
