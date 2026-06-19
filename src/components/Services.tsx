"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Film, Image, TrendingUp } from "lucide-react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
  Scissors: <Scissors size={28} />,
  Film: <Film size={28} />,
  Image: <Image size={28} />,
  TrendingUp: <TrendingUp size={28} />,
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            What I Do
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold">
            Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-8 hover:bg-card-hover hover:border-accent/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                {iconMap[service.icon]}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
