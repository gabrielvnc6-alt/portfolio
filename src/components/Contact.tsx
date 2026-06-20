"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";

const INSTAGRAM_DM = "https://ig.me/m/gabriel1carvalhoo";
const INSTAGRAM_PROFILE = "https://www.instagram.com/gabriel1carvalhoo";
const HANDLE = "@gabriel1carvalhoo";
const IG_GRADIENT =
  "linear-gradient(45deg, #feda75 0%, #fa7e1e 25%, #d62976 50%, #962fbf 75%, #4f5bd5 100%)";

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Let&apos;s Work Together
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Let&apos;s make something
            <br />
            <span className="text-muted">that gets watched.</span>
          </h2>
          <p className="text-muted mt-5 max-w-md mx-auto">
            No long forms. Just slide into my DMs on Instagram and tell me about
            your project.
          </p>
        </motion.div>

        {/* Instagram DM card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-card border border-border rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            {/* Profile header */}
            <div className="flex items-center gap-3 pb-5 border-b border-border">
              <span
                className="w-11 h-11 rounded-2xl flex items-center justify-center text-white shrink-0"
                style={{ background: IG_GRADIENT }}
              >
                <InstagramGlyph />
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-sm leading-tight">Gabriel</p>
                <p className="text-muted text-xs truncate">{HANDLE}</p>
              </div>
              <span className="ml-auto flex items-center gap-2 text-muted text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Replies in a few hours
              </span>
            </div>

            {/* Conversation */}
            <div className="py-6 space-y-3">
              <div className="flex justify-start">
                <p className="max-w-[80%] rounded-2xl rounded-bl-md bg-background border border-border px-4 py-2.5 text-sm text-foreground/90">
                  Hi Gabriel! 👋 I want short-form edits that actually get
                  watched.
                </p>
              </div>
              <div className="flex justify-end">
                <p className="max-w-[80%] rounded-2xl rounded-br-md bg-foreground text-background px-4 py-2.5 text-sm">
                  Say less. Send me the details — let&apos;s make it. 🎬
                </p>
              </div>
            </div>

            {/* Primary CTA */}
            <a
              href={INSTAGRAM_DM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send me a direct message on Instagram"
              className="group flex items-center justify-center gap-2.5 w-full rounded-full py-4 px-6 text-white font-semibold text-base transition-transform duration-200 hover:scale-[1.02] shadow-[0_10px_30px_rgba(214,41,118,0.35)]"
              style={{ background: IG_GRADIENT }}
            >
              <InstagramGlyph className="w-5 h-5" />
              Message me on Instagram
              <ArrowUpRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* Footer line */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 mt-8 text-muted text-sm">
            <a
              href={INSTAGRAM_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Or view my profile {HANDLE}
            </a>
            <span className="hidden sm:block text-border">•</span>
            <span className="flex items-center gap-2">
              <MapPin size={14} />
              Based in Lisbon, working worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
