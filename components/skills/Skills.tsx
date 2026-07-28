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
      className="bg-zinc-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
          Skills
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Infrastructure Stack
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-400">
          Technologies used for building, automating, deploying,
          and monitoring reliable production systems.
        </p>


        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {skills.map((skill) => (

            <div
              key={skill.category}
              className="rounded-2xl border border-zinc-800 bg-black/40 p-6 shadow-lg transition hover:border-cyan-400/40"
            >

              <div className="mb-5 flex items-center gap-3">

                <span className="h-3 w-3 animate-pulse rounded-full bg-green-400" />

                <h3 className="font-mono text-lg text-cyan-300">
                  {skill.category}
                </h3>

              </div>


              <div className="mb-5 rounded-lg border border-zinc-800 bg-zinc-900/60 p-4 font-mono text-sm">

                <p className="text-zinc-500">
                  $ ls {skill.category.toLowerCase()}
                </p>


                <div className="mt-3 space-y-1">

                  {skill.tools.map((tool) => (

                    <p
                      key={tool}
                      className="text-zinc-200"
                    >
                      ├── {tool}
                    </p>

                  ))}

                </div>

              </div>


              <div className="border-t border-zinc-800 pt-3">

                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Status
                </p>

                <p className="mt-1 font-mono text-sm text-green-400">
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