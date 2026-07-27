"use client";

import { useEffect, useState } from "react";
import { ArrowDownToLine, FolderKanban, Mail, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const terminalSequence = [
  "> ssh rajat@portfolio",
  "Connecting...",
  "Authentication successful.",
  "",
  "$ whoami",
  "Rajat Gurjar",
  "Linux System Administrator",
  "",
  "$ skills",
  "Linux",
  "Docker",
  "AWS",
  "Terraform",
  "Kubernetes",
  "Python",
];

const quickDelayLines = new Set(["Connecting...", "Authentication successful.", ""]);

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [activeLine, setActiveLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      const timeout = window.setTimeout(() => {
        setVisibleLines(terminalSequence);
        setActiveLine("");
      }, 0);

      return () => window.clearTimeout(timeout);
    }

    if (lineIndex >= terminalSequence.length) {
      return;
    }

    const currentLine = terminalSequence[lineIndex];
    const isLineComplete = characterIndex >= currentLine.length;

    if (isLineComplete) {
      const timeout = window.setTimeout(
        () => {
          setVisibleLines((lines) => [...lines, currentLine]);
          setActiveLine("");
          setLineIndex((index) => index + 1);
          setCharacterIndex(0);
        },
        quickDelayLines.has(currentLine) ? 260 : 520,
      );

      return () => window.clearTimeout(timeout);
    }

    const timeout = window.setTimeout(() => {
      const nextCharacterIndex = characterIndex + 1;
      setActiveLine(currentLine.slice(0, nextCharacterIndex));
      setCharacterIndex(nextCharacterIndex);
    }, currentLine.startsWith("$") || currentLine.startsWith(">") ? 42 : 24);

    return () => window.clearTimeout(timeout);
  }, [characterIndex, lineIndex]);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-zinc-950 px-6 py-24 text-white sm:px-8 lg:px-12"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.14),transparent_32%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">
            Linux Systems · Cloud · DevOps · AI
          </p>

          <h1
            id="hero-heading"
            className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Rajat Gurjar
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Linux System Administrator building reliable infrastructure,
            automation workflows, and cloud-native engineering skills for
            modern teams.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              <FolderKanban aria-hidden="true" className="h-4 w-4" />
              View Projects
            </a>

            <a
              href="/resume/Rajat-Gurjar-Resume.pdf"
              download
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              <ArrowDownToLine aria-hidden="true" className="h-4 w-4" />
              Download Resume
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-emerald-500/40 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-400 hover:bg-emerald-500/10 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-zinc-950"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
          className="mx-auto w-full max-w-3xl"
        >
          <div className="overflow-hidden rounded-lg border border-zinc-700/80 bg-zinc-950 shadow-2xl shadow-blue-950/40">
            <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/90 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-zinc-400">
                <Terminal aria-hidden="true" className="h-4 w-4" />
                rajat@portfolio:~
              </div>
            </div>

            <div
              aria-label="Animated Linux terminal introduction"
              className="min-h-[420px] bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[length:100%_28px] p-5 font-mono text-sm leading-7 text-zinc-100 sm:min-h-[480px] sm:p-7 sm:text-base"
            >
              {visibleLines.map((line, index) => (
                <TerminalLine key={`${line}-${index}`} line={line} />
              ))}

              {lineIndex < terminalSequence.length ? (
                <TerminalLine line={activeLine} showCursor />
              ) : (
                <TerminalLine line="" showCursor />
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TerminalLine({
  line,
  showCursor = false,
}: {
  line: string;
  showCursor?: boolean;
}) {
  const isCommand = line.startsWith("$") || line.startsWith(">");
  const isSuccess = line === "Authentication successful.";

  return (
    <p
      className={[
        "min-h-7 whitespace-pre-wrap break-words",
        isCommand ? "text-blue-300" : "text-zinc-200",
        isSuccess ? "text-emerald-300" : "",
      ].join(" ")}
    >
      <span>{line}</span>
      {showCursor ? (
        <motion.span
          aria-hidden="true"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
          className="ml-1 inline-block h-5 w-2 translate-y-1 bg-emerald-300"
        />
      ) : null}
    </p>
  );
}
