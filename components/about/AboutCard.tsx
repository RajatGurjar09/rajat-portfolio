export default function AboutCard() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-8 backdrop-blur-md">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 text-4xl font-bold">
          RG
        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Rajat Gurjar
        </h3>

        <p className="mt-2 text-cyan-400">
          Linux System Administrator
        </p>

        <div className="mt-6 w-full space-y-4 text-left">
          <div className="rounded-xl border border-zinc-800 bg-black/40 p-4">
            <p className="text-sm text-zinc-500">
              Current Focus
            </p>
            <p className="mt-1 text-zinc-200">
              Cloud · DevOps · AI Engineering
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-black/40 p-4">
            <p className="text-sm text-zinc-500">
              Infrastructure
            </p>
            <p className="mt-1 text-zinc-200">
              Linux Servers · Automation · Monitoring
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-black/40 p-4">
            <p className="text-sm text-zinc-500">
              Availability
            </p>
            <p className="mt-1 text-green-400">
              Open to Remote Opportunities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}