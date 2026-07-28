type ProjectCardProps = {
  title: string;
  description: string;
  command: string;
  status: string;
  stack: string[];
  stars: number;
  commits: string;
  architecture: string[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({
  title,
  description,
  command,
  status,
  stack,
  stars,
  commits,
  architecture,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <div className="group h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10">

      {/* Terminal Header */}
      <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-950 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />

        <span className="ml-auto font-mono text-xs text-zinc-500">
          terminal
        </span>
      </div>

      <div className="p-6">

        {/* Command */}
        <div className="rounded-xl border border-zinc-800 bg-black/40 p-4 font-mono">
          <p className="text-cyan-300">$ {command}</p>

          <p className="mt-3 text-zinc-500">
            execution successful
          </p>
        </div>

        {/* Title */}
        <h3 className="mt-6 text-2xl font-bold text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-zinc-400">
          {description}
        </p>

        {/* Architecture */}
        <div className="mt-8">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
            Architecture
          </p>

          <div className="grid grid-cols-2 gap-2">
            {architecture.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-2 text-center text-sm text-cyan-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-8">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
            Tech Stack
          </p>

          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-700 bg-black/40 px-3 py-1 text-xs text-zinc-300 transition-colors group-hover:border-cyan-400/30"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 border-t border-zinc-800 pt-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
                Status
              </p>

              <p className="mt-1 font-mono text-sm text-green-400">
                ● {status}
              </p>
            </div>

            <div className="text-right font-mono text-xs text-zinc-500">
              <p>★ {stars}</p>

              <p className="mt-1">
                {commits}
              </p>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-3">

            <a
              href={github ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg border border-zinc-700 px-4 py-2 text-center text-sm font-medium transition hover:border-cyan-400 hover:text-cyan-300"
            >
              GitHub
            </a>

            <a
              href={demo ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg bg-cyan-500 px-4 py-2 text-center text-sm font-semibold text-black transition hover:bg-cyan-400"
            >
              Live Demo
            </a>

          </div>

        </div>

      </div>

    </div>
  );
}