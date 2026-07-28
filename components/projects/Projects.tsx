"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "DevOps AI Platform",

    command: "./run-devops-ai.sh",

    description:
      "AI-powered DevOps engineering platform combining Linux automation, infrastructure monitoring, troubleshooting assistance, and intelligent operations workflows.",

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

    commits: "Current Project",

    architecture: [
      "AI Agents",
      "Automation",
      "Monitoring",
      "CI/CD",
    ],

    github: "#",

    demo: "#",
  },


  {
    title: "Enterprise AWS Infrastructure",

    command: "terraform apply",

    description:
      "Designed AWS infrastructure using Terraform modules covering networking, compute, security, database, scaling, and cloud automation components.",

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

    stars: 40,

    commits: "40+ AWS Services",

    architecture: [
      "VPC",
      "Auto Scaling",
      "Load Balancer",
      "Database",
    ],

    github: "#",

    demo: "#",
  },


  {
    title: "Cloud Native E-Commerce Platform",

    command: "kubectl apply -f deployment.yaml",

    description:
      "Microservices-based e-commerce platform deployed using Docker and Kubernetes with service communication, container orchestration, and monitoring.",

    status: "Deployment Ready",

    stack: [
      "Docker",
      "Kubernetes",
      "gRPC",
      "Redis",
      "Prometheus",
      "Grafana",
    ],

    stars: 11,

    commits: "11 Microservices",

    architecture: [
      "Frontend",
      "Backend",
      "Services",
      "Database",
    ],

    github: "#",

    demo: "#",
  },


  {
    title: "QR Smart Billing & UPI Payment System",

    command: "mvn spring-boot:run",

    description:
      "Full-stack billing application with QR-based billing, invoice generation, inventory management, payment workflow, and backend API services.",

    status: "Completed",

    stack: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "REST API",
      "Maven",
    ],

    stars: 8,

    commits: "Production Build",

    architecture: [
      "Billing",
      "Inventory",
      "Payments",
      "Database",
    ],

    github: "#",

    demo: "#",
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
            automation, Kubernetes, DevOps engineering, and AI-powered systems.
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

              <ProjectCard
                {...project}
              />

            </motion.div>

          ))}


        </div>


      </div>


    </section>
  );
}