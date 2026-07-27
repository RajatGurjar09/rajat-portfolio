export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-white">
          Rajat<span className="text-blue-500">.</span>
        </h1>

        <div className="flex gap-6 text-zinc-300">
          <a href="#projects" className="hover:text-blue-400">
            Projects
          </a>

          <a href="#skills" className="hover:text-blue-400">
            Skills
          </a>

          <a href="#contact" className="hover:text-blue-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}