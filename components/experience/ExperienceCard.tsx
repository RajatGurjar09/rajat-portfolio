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
    <div className="relative pl-9 sm:pl-14">
      {/* Timeline Dot */}
      <div className="absolute left-[3px] top-6 z-10 h-3.5 w-3.5 rounded-full border-[3px] border-zinc-950 bg-cyan-400 shadow-lg shadow-cyan-400/40 sm:left-[7px] sm:top-7 sm:h-4 sm:w-4 sm:border-4" />

      <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 border-b border-zinc-800 bg-black/40 px-4 py-3 sm:px-5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500 sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500 sm:h-3 sm:w-3" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500 sm:h-3 sm:w-3" />

          <span className="ml-auto font-mono text-[10px] text-zinc-500 sm:text-xs">
            terminal
          </span>
        </div>

        <div className="p-4 sm:p-7">
          {/* Command */}
          <div className="overflow-x-auto">
            <p className="whitespace-nowrap font-mono text-xs text-cyan-300 sm:text-sm">
              $ {command}
            </p>
          </div>

          {/* Duration */}
          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400 sm:mt-6 sm:text-xs sm:tracking-[0.25em]">
            {duration}
          </p>

          {/* Role */}
          <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
            {role}
          </h3>

          {/* Company */}
          <p className="mt-2 text-sm text-zinc-400 sm:text-base">
            {company}
          </p>

          {/* Responsibilities */}
          <ul className="mt-6 space-y-4 sm:mt-8">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 sm:gap-4"
              >
                <span
                  className="mt-1 shrink-0 text-sm text-green-400 sm:text-base"
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span className="text-sm leading-6 text-zinc-300 sm:text-base sm:leading-7">
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