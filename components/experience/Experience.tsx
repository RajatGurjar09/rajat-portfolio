"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    company: "Ideas2goal Technology Pvt Ltd",
    role: "Linux System Administrator",
    duration: "June 2025 – Present",
    command: "cat experience/current",
    points: [
      "Maintaining 99.9% uptime across production Linux servers using monitoring, systemd checks, and incident response.",
      "Built Prometheus alerting rules and Grafana dashboards for CPU, disk, and service monitoring.",
      "Automated patch management, backup verification, and maintenance tasks using Bash and Ansible.",
      "Managing SmarterMail and FreeSWITCH infrastructure including SMTP, SSL/TLS, SIP routing, and troubleshooting.",
    ],
  },
  {
    company: "Rostris Infotech Pvt Ltd",
    role: "Junior DevOps Engineer",
    duration: "May 2024 – May 2025",
    command: "cat experience/previous",
    points: [
      "Built CI/CD pipelines using Jenkins and GitHub Actions for automated deployments.",
      "Provisioned AWS infrastructure using Terraform including EC2, VPC, IAM, S3, and RDS.",
      "Created Ansible automation workflows for configuration management.",
      "Managed Linux servers with SSH hardening, Nginx, firewall rules, cron, and systemd services.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-zinc-950 py-20 text-white sm:py-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
            Experience
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            Professional Journey
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
            Building reliable infrastructure through Linux administration,
            automation, cloud engineering, and DevOps practices.
          </p>
        </motion.div>

        <div className="relative mt-12 sm:mt-16">
          <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-cyan-500/30 to-transparent sm:left-4" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
              >
                <ExperienceCard {...experience} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}