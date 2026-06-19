"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { portfolioItems, categories, type Category } from "@/data/portfolio";

function VideoCard({
  item,
  index,
  onOpen,
}: {
  item: (typeof portfolioItems)[0];
  index: number;
  onOpen: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative cursor-pointer rounded-2xl overflow-hidden bg-card border border-border hover:border-accent/20 transition-all duration-300"
      onClick={onOpen}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={item.posterSrc}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <video
          ref={videoRef}
          src={item.videoSrc}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-accent/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
            <Play size={24} className="text-black ml-1" fill="black" />
          </div>
        </div>
      </div>
      <div className="p-5">
        <span className="text-accent text-xs font-medium uppercase tracking-wider">
          {item.category}
        </span>
        <h3 className="font-[family-name:var(--font-display)] text-base font-semibold mt-1.5">
          {item.title}
        </h3>
      </div>
    </motion.div>
  );
}

function Lightbox({
  item,
  onClose,
}: {
  item: (typeof portfolioItems)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
      >
        <X size={32} />
      </button>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-video bg-black rounded-xl overflow-hidden">
          <video
            src={item.videoSrc}
            controls
            autoPlay
            className="w-full h-full"
            poster={item.posterSrc}
          />
        </div>
        <div className="mt-6">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            {item.category}
          </span>
          <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold mt-2">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-muted mt-3 max-w-2xl">{item.description}</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState<Category>("all");
  const [lightboxItem, setLightboxItem] = useState<
    (typeof portfolioItems)[0] | null
  >(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <>
      <section id="portfolio" className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
              Selected Work
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold">
              Portfolio
            </h2>
          </motion.div>

          {/* Filter chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === cat.value
                    ? "bg-accent text-black"
                    : "bg-card border border-border text-muted hover:text-foreground hover:border-white/20"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <VideoCard
                  key={item.id}
                  item={item}
                  index={i}
                  onOpen={() => setLightboxItem(item)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxItem && (
          <Lightbox
            item={lightboxItem}
            onClose={() => setLightboxItem(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
