type ProjectCardProps = {
  title: string;
  description: string;
  command: string;
  status: string;
  stack: string[];
  commits: string;
  architecture: string[];
  github?: string;
};

export default function ProjectCard({
  title,
  description,
  command,
  status,
  stack,
  commits,
  architecture,
  github,
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

      <div className="p-4 sm:p-6">
        {/* Command */}
        <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-black/40 p-3 font-mono text-xs sm:p-4 sm:text-sm">
          <p className="whitespace-nowrap text-cyan-300">
            $ {command}
          </p>

          <p className="mt-3 text-zinc-500">
            execution successful
          </p>
        </div>

        {/* Title */}
        <h3 className="mt-5 text-xl font-bold text-white sm:mt-6 sm:text-2xl">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-6 text-zinc-400 sm:mt-4 sm:text-base sm:leading-7">
          {description}
        </p>

        {/* Architecture */}
        <div className="mt-6 sm:mt-8">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs">
            Architecture
          </p>

          <div className="grid grid-cols-2 gap-2">
            {architecture.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-2 py-2 text-center text-xs text-cyan-200 sm:px-3 sm:text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-6 sm:mt-8">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 sm:text-xs">
            Tech Stack
          </p>

          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-700 bg-black/40 px-2.5 py-1 text-[11px] text-zinc-300 transition-colors group-hover:border-cyan-400/30 sm:px-3 sm:text-xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 border-t border-zinc-800 pt-4 sm:mt-8 sm:pt-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 sm:text-xs">
                Status
              </p>

              <p className="mt-1 font-mono text-xs text-green-400 sm:text-sm">
                <span aria-hidden="true">●</span>{" "}
                {status}
              </p>
            </div>

            <div className="font-mono text-xs text-zinc-500 sm:text-right">
              <p>{commits}</p>
            </div>
          </div>

          {/* GitHub Button */}
          <div className="mt-5 sm:mt-6">
            <a
              href={github ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg border border-zinc-700 px-4 py-2.5 text-center text-sm font-medium transition hover:border-cyan-400 hover:text-cyan-300"
            >
              View GitHub Repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}