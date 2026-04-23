import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

interface ExperienceEntry {
  company: string;
  role: string;
  date: string;
  location: string;
  bullets: string[];
}

const experiences: ExperienceEntry[] = [
  {
    company: "Costco Wholesale",
    role: "Meat Assistant",
    date: "May 2023 – Present",
    location: "Ancaster, ON",
    bullets: [
      "Maintained strict health and safety standards while operating and cleaning industrial equipment, contributing to full compliance across all monthly inspections",
      "Coordinated nightly shipment intake and inter-department logistics, improving workflow efficiency and consistently meeting time-sensitive deadlines as part of a fast-paced team",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* ── Section heading ─────────────────────────────── */}
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-16 text-center text-3xl font-bold"
        >
          <span className="text-primary">Experience</span>
        </motion.h2>

        {/* ── Timeline entries ────────────────────────────── */}
        <div className="relative space-y-8 border-l-2 border-divider pl-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.company + exp.role}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" />

              <div className="rounded-2xl border border-divider bg-surface p-6">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {exp.company}{" "}
                    <span className="text-text-muted">— {exp.role}</span>
                  </h3>
                  <span className="shrink-0 text-sm text-text-muted">
                    {exp.date}
                  </span>
                </div>
                <p className="mt-1 text-sm text-text-muted">{exp.location}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-muted">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
