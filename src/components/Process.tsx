"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Scissors, RotateCcw, Send } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare size={24} />,
    title: "Brief",
    description: "Share your vision, references, and goals. I'll ask the right questions.",
  },
  {
    icon: <Scissors size={24} />,
    title: "Edit",
    description: "I craft your video with pro-level pacing, effects, and sound design.",
  },
  {
    icon: <RotateCcw size={24} />,
    title: "Revisions",
    description: "Fine-tune until it's perfect. Fast turnaround on all feedback.",
  },
  {
    icon: <Send size={24} />,
    title: "Delivery",
    description: "Final files delivered in all formats you need. Ready to publish.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-24 border-y border-border">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            How It Works
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold">
            My Process
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-border" />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="hidden md:block absolute top-12 left-0 right-0 h-px bg-accent origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                className="text-center relative"
              >
                <div className="w-24 h-24 rounded-full bg-card border border-border mx-auto flex items-center justify-center text-accent mb-6 relative z-10">
                  {step.icon}
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
