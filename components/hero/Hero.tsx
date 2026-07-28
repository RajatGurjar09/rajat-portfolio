"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownToLine,
  FolderKanban,
  Mail,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";

const terminalSequence = [
  "> ssh rajat@devops-node",

  "Connecting to production environment...",
  "Authentication successful.",

  "",

  "$ whoami",

  "Rajat Gurjar",
  "Linux System Administrator | DevOps Engineer",

  "",

  "$ uptime",

  "Infrastructure uptime: 99.9%",
  "Production systems: Healthy",

  "",

  "$ kubectl get nodes",

  "NAME              STATUS",
  "prod-master       Ready",
  "worker-node-01    Ready",
  "worker-node-02    Ready",

  "",

  "$ docker ps",

  "CONTAINER        STATUS",
  "nginx            Running",
  "api-service      Running",
  "monitoring       Running",

  "",

  "$ terraform apply",

  "Initializing infrastructure...",
  "AWS resources provisioning...",
  "Apply complete! Infrastructure ready.",

  "",

  "$ ./deploy-ai-agent.sh",

  "Loading DevOps AI assistant...",
  "Monitoring enabled.",
  "Automation ready.",

  "",

  "$ systemctl status",

  "All critical services active ✓",
];


const quickDelayLines = new Set([
  "",
  "Authentication successful.",
]);


export default function Hero() {

  const [
    visibleLines,
    setVisibleLines,
  ] = useState<string[]>([]);


  const [
    activeLine,
    setActiveLine,
  ] = useState("");


  const [
    lineIndex,
    setLineIndex,
  ] = useState(0);


  const [
    characterIndex,
    setCharacterIndex,
  ] = useState(0);



  useEffect(() => {

    if (lineIndex >= terminalSequence.length) {
      return;
    }


    const currentLine = terminalSequence[lineIndex];


    if (characterIndex >= currentLine.length) {

      const timeout = window.setTimeout(() => {

        setVisibleLines((prev) => [
          ...prev,
          currentLine,
        ]);

        setActiveLine("");

        setLineIndex((prev) => prev + 1);

        setCharacterIndex(0);

      }, quickDelayLines.has(currentLine) ? 250 : 450);


      return () => clearTimeout(timeout);

    }



    const timeout = window.setTimeout(() => {

      setActiveLine(
        currentLine.slice(
          0,
          characterIndex + 1
        )
      );


      setCharacterIndex(
        (prev) => prev + 1
      );


    }, currentLine.startsWith("$") ||
      currentLine.startsWith(">") 
        ? 45 
        : 22);



    return () => clearTimeout(timeout);


  }, [
    characterIndex,
    lineIndex,
  ]);



  return (

<section
id="home"
className="relative isolate flex min-h-screen items-center overflow-hidden bg-zinc-950 px-6 py-24 text-white"
>


<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.20),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.12),transparent_30%)]"
/>



<div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">


<motion.div
initial={{
opacity:0,
y:30,
}}
animate={{
opacity:1,
y:0,
}}
transition={{
duration:0.6,
}}
>


<p className="text-sm uppercase tracking-[0.3em] text-cyan-400">

Linux Systems · Cloud · DevOps · AI

</p>



<h1 className="mt-5 text-5xl font-bold md:text-6xl">

Rajat Gurjar

</h1>



<p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">

Linux System Administrator and DevOps Engineer building
reliable infrastructure, automating operations, and
designing cloud-native platforms.

</p>



<div className="mt-8 flex flex-wrap gap-3">


<a
href="#projects"
className="flex items-center gap-2 rounded-md bg-cyan-500 px-5 py-3 font-semibold text-black hover:bg-cyan-400"
>

<FolderKanban className="h-4 w-4"/>

Projects

</a>



<a
href="/resume/Rajat-Gurjar-Resume.pdf"
download
className="flex items-center gap-2 rounded-md border border-zinc-700 px-5 py-3"
>

<ArrowDownToLine className="h-4 w-4"/>

Resume

</a>



<a
href="#contact"
className="flex items-center gap-2 rounded-md border border-green-500/40 px-5 py-3 text-green-300"
>

<Mail className="h-4 w-4"/>

Contact

</a>


</div>


</motion.div>





<motion.div
initial={{
opacity:0,
scale:0.95,
}}
animate={{
opacity:1,
scale:1,
}}
transition={{
duration:0.7,
}}
>


<div className="overflow-hidden rounded-xl border border-zinc-800 bg-black shadow-2xl">


<div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4 py-3">


<div className="flex gap-2">

<span className="h-3 w-3 rounded-full bg-red-400"/>

<span className="h-3 w-3 rounded-full bg-yellow-400"/>

<span className="h-3 w-3 rounded-full bg-green-400"/>

</div>



<div className="flex items-center gap-2 font-mono text-xs text-zinc-400">

<Terminal className="h-4 w-4"/>

rajat@devops:~

</div>


</div>



<div className="min-h-[430px] p-6 font-mono text-sm leading-7">


{visibleLines.map((line,index)=>(

<TerminalLine
key={index}
line={line}
/>

))}



<TerminalLine
line={activeLine}
cursor
/>


</div>



</div>



</motion.div>



</div>


</section>

  );
}



function TerminalLine({
line,
cursor=false,
}:{
line:string;
cursor?:boolean;
}){


const command =
line.startsWith("$") ||
line.startsWith(">");


return (

<p
className={`min-h-7 whitespace-pre-wrap ${
command
? "text-cyan-300"
: "text-zinc-300"
}`}
>

{line}


{cursor && (

<motion.span
animate={{
opacity:[1,0,1],
}}
transition={{
duration:.8,
repeat:Infinity,
}}
className="ml-1 inline-block h-5 w-2 bg-green-400"
/>

)}


</p>

);

}