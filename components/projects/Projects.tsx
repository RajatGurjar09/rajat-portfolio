"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "DevOps AI Platform",

    command: "./run-devops-ai.sh",

    description:
      "AI-powered DevOps engineering platform currently under development, focused on Linux automation, infrastructure monitoring, troubleshooting assistance, and intelligent operations workflows.",

    status: "Active Development",

    stack: [
      "Linux",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Ansible",
      "Python",
      "Ollama",
      "Prometheus",
      "Grafana",
    ],

    stars: 0,

    commits: "Active Development",

    architecture: [
      "AI Agents",
      "Automation",
      "Monitoring",
      "CI/CD",
    ],

    github: "https://github.com/RajatGurjar09/project-phoenix",
  },

  {
    title: "Enterprise AWS Infrastructure",

    command: "terraform apply",

    description:
      "Infrastructure-as-Code project implementing AWS cloud infrastructure with Terraform modules for networking, compute, security, database, scaling, and cloud automation.",

    status: "Infrastructure Ready",

    stack: [
      "AWS",
      "Terraform",
      "EC2",
      "VPC",
      "IAM",
      "RDS",
      "S3",
      "CloudWatch",
    ],

    stars: 0,

    commits: "Terraform Infrastructure",

    architecture: [
      "VPC",
      "Auto Scaling",
      "Load Balancer",
      "Database",
    ],

    github: "https://github.com/RajatGurjar09/aws-terraform-3tier",
  },

  {
    title: "Cloud Native E-Commerce Platform",

    command: "kubectl apply -f deployment.yaml",

    description:
      "Cloud-native microservices e-commerce platform deployed with Docker and Kubernetes, demonstrating container orchestration, service communication, health monitoring, and production-style operations.",

    status: "Deployment Ready",

    stack: [
      "Docker",
      "Kubernetes",
      "gRPC",
      "Redis",
      "Prometheus",
      "Grafana",
    ],

    stars: 0,

    commits: "Kubernetes Deployment",

    architecture: [
      "Frontend",
      "Microservices",
      "Service Communication",
      "Redis",
    ],

    github: "https://github.com/RajatGurjar09/online-boutique-devops",
  },

  {
    title: "Linux Automation Toolkit",

    command: "./system-health.sh",

    description:
      "Practical Linux automation scripts for system administration, server health checks, resource monitoring, troubleshooting, maintenance, and repetitive operational tasks.",

    status: "Completed",

    stack: [
      "Linux",
      "Bash",
      "Shell Scripting",
      "System Administration",
      "Automation",
    ],

    stars: 0,

    commits: "Automation Scripts",

    architecture: [
      "Health Checks",
      "Monitoring",
      "Automation",
      "Maintenance",
    ],

    github: "https://github.com/RajatGurjar09/linux-automation-scripts",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-zinc-950 py-24 text-white"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Engineering Work
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Hands-on projects focused on cloud infrastructure,
            automation, Kubernetes, DevOps engineering, Linux
            administration, and AI-powered systems.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}