type ExperienceCardProps = {
  company: string;
  role: string;
  duration: string;
  command: string;
  points: string[];
};

export default function ExperienceCard({
  company,
  role,
  duration,
  command,
  points,
}: ExperienceCardProps) {
  return (
    <div className="relative pl-14">
      {/* Timeline Dot */}
      <div className="absolute left-[7px] top-7 z-10 h-4 w-4 rounded-full border-4 border-zinc-950 bg-cyan-400 shadow-lg shadow-cyan-400/40" />

      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 border-b border-zinc-800 bg-black/40 px-5 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />

          <span className="ml-auto font-mono text-xs text-zinc-500">
            terminal
          </span>
        </div>

        <div className="p-7">
          <p className="font-mono text-sm text-cyan-300">
            $ {command}
          </p>

          <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-cyan-400">
            {duration}
          </p>

          <h3 className="mt-2 text-2xl font-bold text-white">
            {role}
          </h3>

          <p className="mt-2 text-zinc-400">
            {company}
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex gap-4">
                <span className="mt-1 text-green-400">✓</span>

                <span className="leading-7 text-zinc-300">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}