export default function AboutContent() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur-md">

      <h3 className="text-2xl font-bold text-white">
        My Journey
      </h3>


      <p className="mt-6 leading-relaxed text-zinc-400">
        I am a Linux System Administrator and DevOps Engineer focused on
        designing, maintaining, and automating reliable production
        infrastructure. My experience includes managing Linux servers,
        cloud platforms, containerized applications, monitoring systems,
        and deployment pipelines.

        <br />
        <br />

        I work with AWS, Docker, Kubernetes, Terraform, Ansible, and CI/CD
        automation to build scalable environments. I have hands-on experience
        managing real-world infrastructure including mail systems,
        communication platforms, server monitoring, security hardening,
        and automation workflows.
      </p>



      <div className="mt-8">

        <h4 className="text-lg font-semibold text-cyan-400">
          Core Expertise
        </h4>


        <div className="mt-4 flex flex-wrap gap-3">

          {[
            "Linux Administration",
            "AWS Infrastructure",
            "Docker",
            "Kubernetes",
            "Terraform",
            "Ansible",
            "Jenkins",
            "GitHub Actions",
            "Python",
            "Bash Automation",
            "Prometheus",
            "Grafana",
            "Nginx",
            "CI/CD",
          ].map((skill) => (

            <span
              key={skill}
              className="rounded-full border border-zinc-700 bg-black/40 px-4 py-2 text-sm text-zinc-200 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              {skill}
            </span>

          ))}

        </div>

      </div>



      <div className="mt-8 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">

        <p className="font-mono text-sm text-cyan-300">
          $ cat /career/mission.txt
        </p>


        <p className="mt-3 text-zinc-300">
          Build reliable systems. Automate operations. Improve
          infrastructure through observability, Infrastructure as Code,
          and continuous learning. My goal is to create secure,
          scalable, and intelligent platforms that simplify complex
          engineering challenges.
        </p>

      </div>



      <div className="mt-8 grid gap-4 sm:grid-cols-3">

        <div className="rounded-xl border border-zinc-800 bg-black/30 p-4">

          <p className="font-mono text-xs uppercase text-zinc-500">
            Role
          </p>

          <p className="mt-2 text-sm text-white">
            Linux + DevOps Engineer
          </p>

        </div>



        <div className="rounded-xl border border-zinc-800 bg-black/30 p-4">

          <p className="font-mono text-xs uppercase text-zinc-500">
            Focus
          </p>

          <p className="mt-2 text-sm text-white">
            Cloud Automation
          </p>

        </div>



        <div className="rounded-xl border border-zinc-800 bg-black/30 p-4">

          <p className="font-mono text-xs uppercase text-zinc-500">
            Building
          </p>

          <p className="mt-2 text-sm text-white">
            AI DevOps Platform
          </p>

        </div>


      </div>


    </div>
  );
}