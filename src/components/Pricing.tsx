"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { pricingTiers } from "@/data/pricing";

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 md:py-32 border-y border-border">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Pricing
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold">
            Simple Packages
          </h2>
          <p className="text-muted mt-4 max-w-md mx-auto">
            Pick a package or reach out for a custom quote. All prices in USD.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                tier.highlighted
                  ? "bg-accent/5 border-accent/30 ring-1 ring-accent/20"
                  : "bg-card border-border hover:border-accent/20"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-black text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
                {tier.name}
              </h3>
              <p className="text-muted text-sm mt-2">{tier.description}</p>
              <div className="mt-6 mb-6">
                <span className="font-[family-name:var(--font-display)] text-4xl font-bold">
                  {tier.price}
                </span>
                {tier.price !== "Let's Talk" && (
                  <span className="text-muted text-sm ml-1">/project</span>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
                  tier.highlighted
                    ? "bg-accent text-black hover:bg-accent-hover"
                    : "bg-white/5 border border-border text-foreground hover:bg-white/10"
                }`}
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
