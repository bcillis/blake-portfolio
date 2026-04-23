import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-6 text-3xl font-bold"
        >
          Get In <span className="text-primary">Touch</span>
        </motion.h2>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-8 text-lg text-text-muted"
        >
          I'm currently open to full-time software engineering roles. Feel free
          to reach out.
        </motion.p>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex justify-center gap-4"
        >
          <a
            href="mailto:bcillis2@uwo.ca"
            className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-105"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/blake-cillis"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary transition-transform hover:scale-105"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
