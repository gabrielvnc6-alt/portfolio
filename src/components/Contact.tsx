"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import { Send, MapPin } from "lucide-react";

const projectTypes = [
  "Short-Form Video (TikTok/Reels)",
  "YouTube Long-Form",
  "Thumbnail Design",
  "Content Strategy",
  "Full Package",
  "Other",
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // silently handle
    }

    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Let&apos;s Work Together
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Let&apos;s make something
            <br />
            <span className="text-accent">that gets watched.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {submitted ? (
            <div className="text-center py-16 bg-card border border-border rounded-2xl">
              <div className="w-16 h-16 rounded-full bg-accent/20 text-accent flex items-center justify-center mx-auto mb-4">
                <Send size={28} />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-2">
                Message Sent!
              </h3>
              <p className="text-muted">
                I&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-8 md:p-10 space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@email.com"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Project Type
                </label>
                <select
                  name="projectType"
                  required
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent/50 transition-colors appearance-none"
                >
                  <option value="">Select a project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, goals, and timeline..."
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-black font-semibold py-4 rounded-full text-base hover:bg-accent-hover transition-all duration-200 hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>

        {/* Social links & location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center gap-6 mt-12"
        >
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/gabriel1carvalhoo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
          <p className="flex items-center gap-2 text-muted text-sm">
            <MapPin size={14} />
            Based in Lisbon, working worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
}
