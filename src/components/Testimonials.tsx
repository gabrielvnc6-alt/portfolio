"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";
import {
  testimonials,
  type WrittenTestimonial,
  type ScreenshotTestimonial,
} from "@/data/testimonials";

const avatarColors = [
  "bg-rose-500/20 text-rose-300",
  "bg-sky-500/20 text-sky-300",
  "bg-emerald-500/20 text-emerald-300",
  "bg-violet-500/20 text-violet-300",
  "bg-amber-500/20 text-amber-300",
  "bg-fuchsia-500/20 text-fuchsia-300",
];

function avatarColor(name: string) {
  const hash = name
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return avatarColors[hash % avatarColors.length];
}

function WrittenCard({
  item,
  index,
}: {
  item: WrittenTestimonial;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border border-border rounded-2xl p-8 hover:border-accent/20 transition-all duration-300"
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className="text-accent fill-accent"
          />
        ))}
      </div>
      <p className="text-foreground/90 leading-relaxed mb-6 text-[15px]">
        &ldquo;{item.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full ${avatarColor(item.name)} flex items-center justify-center font-semibold text-sm`}>
          {item.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="font-semibold text-sm">{item.name}</p>
          <p className="text-muted text-xs">{item.role}</p>
        </div>
      </div>
    </motion.div>
  );
}

function ScreenshotCard({
  item,
  index,
}: {
  item: ScreenshotTestimonial;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border border-border rounded-2xl p-4 hover:border-accent/20 transition-all duration-300 overflow-hidden"
    >
      <div className="rounded-xl overflow-hidden bg-black/50">
        <img
          src={item.imageSrc}
          alt={item.alt}
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>
      <p className="text-muted text-xs mt-3 px-1">
        via <span className="text-foreground/60 font-medium">{item.platform}</span>
      </p>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Client Love
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold">
            What They Say
          </h2>
        </motion.div>

        {isInView && (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {testimonials.map((item, i) =>
              item.type === "written" ? (
                <div key={item.id} className="break-inside-avoid">
                  <WrittenCard item={item} index={i} />
                </div>
              ) : (
                <div key={item.id} className="break-inside-avoid">
                  <ScreenshotCard item={item} index={i} />
                </div>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}
