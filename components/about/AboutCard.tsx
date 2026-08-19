export default function AboutCard() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-5 backdrop-blur-md sm:p-8">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-3xl font-bold sm:h-32 sm:w-32 sm:text-4xl">
          RG
        </div>

        <h3 className="mt-5 text-xl font-bold sm:mt-6 sm:text-2xl">
          Rajat Gurjar
        </h3>

        <p className="mt-2 text-sm text-cyan-400 sm:text-base">
          Linux System Administrator
        </p>

        <div className="mt-5 w-full space-y-3 text-left sm:mt-6 sm:space-y-4">
          <div className="rounded-xl border border-zinc-800 bg-black/40 p-4">
            <p className="text-sm text-zinc-500">
              Current Focus
            </p>

            <p className="mt-1 text-sm text-zinc-200 sm:text-base">
              Cloud · DevOps · AI Engineering
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-black/40 p-4">
            <p className="text-sm text-zinc-500">
              Infrastructure
            </p>

            <p className="mt-1 text-sm text-zinc-200 sm:text-base">
              Linux Servers · Automation · Monitoring
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-black/40 p-4">
            <p className="text-sm text-zinc-500">
              Availability
            </p>

            <p className="mt-1 text-sm text-green-400 sm:text-base">
              Open to Remote Opportunities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}