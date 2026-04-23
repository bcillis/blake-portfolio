import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const tileVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* ── Section heading ─────────────────────────────── */}
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-16 text-center text-3xl font-bold"
        >
          <span className="text-primary">Skills</span>
        </motion.h2>

        {/* ── Skill groups ───────────────────────────────── */}
        <div className="space-y-12">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <motion.h3
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-6 text-lg font-semibold text-text-muted"
              >
                {group.category}
              </motion.h3>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
              >
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={tileVariant}
                    className="group flex flex-col items-center gap-2 rounded-xl border border-divider bg-surface p-4 transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]"
                  >
                    <i
                      className={`${skill.icon} text-3xl text-text-muted transition-colors duration-300 group-hover:text-primary`}
                    />
                    <span className="text-center text-xs text-text-muted">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
