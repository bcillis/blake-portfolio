import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stats = [
  { emoji: "\uD83C\uDF93", text: "Western University, 2026" },
  { emoji: "\uD83D\uDCCD", text: "Ancaster, Ontario" },
  { emoji: "\uD83D\uDCBC", text: "Open to full-time roles" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* ── Section heading ─────────────────────────────── */}
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-12 text-center text-3xl font-bold"
        >
          About <span className="text-primary">Me</span>
        </motion.h2>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center gap-12 md:flex-row md:items-start"
        >
          {/* ── Photo placeholder (left column) ────────────── */}
          {/*
            TODO: Replace this placeholder div with an <img> tag once you have a photo.
            Example:
              <img
                src="/your-photo.jpg"
                alt="Blake Cillis"
                className="h-48 w-48 rounded-full object-cover border-2 border-primary"
              />
            Drop the image in the /public folder and reference it with a leading slash.
          */}
          <div className="flex h-48 w-48 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-primary bg-surface text-4xl font-bold text-primary">
            BC
          </div>

          {/* ── Text content (right column) ─────────────────── */}
          <div>
            <p className="text-lg leading-relaxed text-text-muted">
              I'm a Software Engineering graduate from Western University with a
              passion for building scalable systems and meaningful software.
              I've worked on projects that cover a wide variety of topics from a multithreaded C++ chat
              backend to a React Native mobile app built alongside real
              healthcare professionals, and I'm most determined when the problem
              is hard enough to require real engineering thought. I care about
              writing code that's not just functional, but maintainable and
              well-reasoned. I'm currently seeking junior software engineering
              roles across Hamilton, the KW corridor, and the GTA.
            </p>

            {/* ── Stat pills ──────────────────────────────────── */}
            <div className="mt-6 flex flex-wrap gap-3">
              {stats.map((stat) => (
                <span
                  key={stat.text}
                  className="rounded-full border border-divider bg-surface px-4 py-2 text-sm text-text-muted"
                >
                  {stat.emoji} {stat.text}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
