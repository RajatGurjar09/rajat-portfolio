"use client";

import { Terminal } from "lucide-react";


export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-6 py-10 text-white">

      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">

        {/* Brand */}

        <div>

          <div className="flex items-center gap-2 font-mono text-lg font-bold">

            <Terminal className="h-5 w-5 text-cyan-400" />

            Rajat
            <span className="text-cyan-400">
              .
            </span>

          </div>


          <p className="mt-3 max-w-md text-sm leading-6 text-zinc-400">

            Linux System Administrator &
            DevOps Engineer building reliable
            infrastructure, automation pipelines,
            and cloud-native solutions.

          </p>

        </div>



        {/* Social Links */}

        <div className="flex gap-4">


          <a
            href="https://github.com/RajatGurjar09"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-800 p-3 text-zinc-400 transition hover:border-cyan-400 hover:text-cyan-400"
          >

            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >

              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.2-3.37-1.2-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.1 2.92.84.09-.66.35-1.1.64-1.35-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.38-2.03 1-2.75-.1-.25-.43-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0112 6.8c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.54 1.4.2 2.45.1 2.7.62.72 1 1.63 1 2.75 0 3.95-2.34 4.82-4.57 5.07.36.32.68.95.68 1.92v2.85c0 .27.18.59.69.48A10.03 10.03 0 0022 12.26C22 6.58 17.52 2 12 2z"/>

            </svg>

          </a>



          <a
            href="https://linkedin.com/in/rajat-gurjar-5b9a231ba"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-800 p-3 text-zinc-400 transition hover:border-cyan-400 hover:text-cyan-400"
          >

            <span className="font-bold">
              in
            </span>

          </a>


        </div>


      </div>



      {/* Bottom */}

      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-zinc-900 pt-6 text-xs text-zinc-500 md:flex-row md:justify-between">

        <p>
          © {new Date().getFullYear()} Rajat Gurjar. All rights reserved.
        </p>


        <p className="font-mono">
          Built with Next.js + Tailwind CSS
        </p>


      </div>


    </footer>
  );
}