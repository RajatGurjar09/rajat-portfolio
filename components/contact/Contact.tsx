export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-zinc-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <p className="font-mono text-sm uppercase tracking-[0.3em] text-cyan-400">
          Contact
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Let's Connect
        </h2>


        <div className="mt-10 max-w-3xl rounded-3xl border border-zinc-800 bg-black/50 p-8 font-mono">


          <div className="flex items-center gap-2 border-b border-zinc-800 pb-4">

            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />

            <span className="ml-3 text-sm text-zinc-500">
              terminal
            </span>

          </div>



          <div className="mt-6 space-y-5 text-sm">


            <p className="text-cyan-400">
              rajat@portfolio:~$ connect
            </p>


            <p className="text-green-400">
              ✓ Connection ready
            </p>



            <div className="space-y-4 text-zinc-300">


              <div>
                <p className="text-zinc-500">
                  Email:
                </p>

                <p className="mt-1 text-white">
                  rajat.gurjar02@gmail.com
                </p>
              </div>



              <div>
                <p className="text-zinc-500">
                  LinkedIn:
                </p>

                <p className="mt-1 text-white">
                  linkedin.com/in/rajat-gurjar-5b9a231ba
                </p>
              </div>



              <div>
                <p className="text-zinc-500">
                  GitHub:
                </p>

                <p className="mt-1 text-white">
                  github.com/RajatGurjar09
                </p>
              </div>


            </div>



            <div className="mt-6 rounded-xl border border-green-500/20 bg-green-500/5 p-4">


              <p className="text-green-400">
                STATUS: ONLINE
              </p>


              <p className="mt-2 text-zinc-400">
                Open to Linux, Cloud, DevOps, and Infrastructure opportunities.
              </p>


            </div>


          </div>


        </div>


      </div>
    </section>
  );
}