"use client";

import { motion } from "framer-motion";
import AboutCard from "./AboutCard";
import AboutContent from "./AboutContent";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-zinc-950 py-24 text-white"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            About
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Engineering Reliable Systems
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Linux System Administrator and DevOps Engineer focused on building reliable infrastructure, 
            automating operations, and developing cloud-native solutions.
          </p>
        </motion.div>


        <div className="mt-16 grid gap-10 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <AboutCard />
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <AboutContent />
          </motion.div>

        </div>

      </div>
    </section>
  );
}