const skills = [
  {
    category: "Linux",
    status: "Production Infrastructure",
    tools: ["Ubuntu", "CentOS", "RHEL", "systemd", "SSH"],
  },
  {
    category: "Cloud",
    status: "Cloud Engineering",
    tools: ["AWS", "EC2", "VPC", "IAM", "S3"],
  },
  {
    category: "Containers",
    status: "Container Platform",
    tools: ["Docker", "Kubernetes", "Helm"],
  },
  {
    category: "Automation",
    status: "Infrastructure Automation",
    tools: ["Terraform", "Ansible", "Jenkins"],
  },
  {
    category: "Monitoring",
    status: "Observability Stack",
    tools: ["Prometheus", "Grafana", "CloudWatch"],
  },
  {
    category: "Scripting",
    status: "Automation Scripts",
    tools: ["Python", "Bash", "Cron"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-zinc-950 py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400 sm:text-sm">
          Skills
        </p>

        <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          Infrastructure Stack
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
          Technologies used for building, automating, deploying,
          and monitoring reliable production systems.
        </p>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="rounded-2xl border border-zinc-800 bg-black/40 p-5 shadow-lg transition hover:border-cyan-400/40 sm:p-6"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-3 w-3 animate-pulse rounded-full bg-green-400" />

                <h3 className="font-mono text-base text-cyan-300 sm:text-lg">
                  {skill.category}
                </h3>
              </div>

              <div className="mb-5 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/60 p-3 font-mono text-xs sm:p-4 sm:text-sm">
                <p className="whitespace-nowrap text-zinc-500">
                  $ ls {skill.category.toLowerCase()}
                </p>

                <div className="mt-3 space-y-1">
                  {skill.tools.map((tool) => (
                    <p
                      key={tool}
                      className="whitespace-nowrap text-zinc-200"
                    >
                      ├── {tool}
                    </p>
                  ))}
                </div>
              </div>

              <div className="border-t border-zinc-800 pt-3">
                <p className="text-[10px] uppercase tracking-wider text-zinc-500 sm:text-xs">
                  Status
                </p>

                <p className="mt-1 font-mono text-xs text-green-400 sm:text-sm">
                  {skill.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}