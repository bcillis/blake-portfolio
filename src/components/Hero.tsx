import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = ["Software Engineer", "Backend Developer", "Systems Builder"];

/* ── Stagger animation variants ─────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  /* ── Typing / deleting loop ───────────────────────────────── */
  useEffect(() => {
    const current = roles[roleIndex];

    if (!isDeleting && displayed === current) {
      // Pause at the end of the word, then start deleting
      const pause = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayed === "") {
      // Move to next role — use a short timeout so state updates
      // happen inside a timer callback, not synchronously in the effect body
      const next = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 50);
      return () => clearTimeout(next);
    }

    const speed = isDeleting ? 40 : 80;
    const timeout = setTimeout(() => {
      setDisplayed(
        isDeleting
          ? current.slice(0, displayed.length - 1)
          : current.slice(0, displayed.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      {/* Subtle radial glow behind the hero */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* ── Open to Work badge ────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-divider bg-surface px-4 py-1.5 text-sm text-text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Open to Work
        </motion.div>

        {/* ── Heading with typing effect ────────────────────── */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          Hi, I'm Blake —
          <br />
          <span className="text-primary">
            {displayed}
            <span className="ml-0.5 inline-block w-0.75 animate-pulse bg-primary align-middle" style={{ height: "1em" }} />
          </span>
        </motion.h1>

        {/* ── Bio sub-heading ───────────────────────────────── */}
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-lg text-text-muted"
        >
          A Software Engineering graduate from Western University who loves
          building things. From distributed systems
          and real-time backends to full-stack applications that people actually
          use. Currently looking for software engineering roles across Ontario
          where I can contribute and keep growing.
        </motion.p>

        {/* ── CTA Buttons ──────────────────────────────────── */}
        <motion.div variants={fadeUp} className="mt-8 flex gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
          >
            View My Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary transition-transform hover:scale-105"
          >
            Download Resume
          </a>
        </motion.div>

        {/* ── Social icons ─────────────────────────────────── */}
        <motion.div variants={fadeUp} className="mt-6 flex gap-5">
          <a
            href="https://github.com/bcillis2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-muted transition-colors hover:text-primary"
          >
            {/* GitHub SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/blake-cillis"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted transition-colors hover:text-primary"
          >
            {/* LinkedIn SVG icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
