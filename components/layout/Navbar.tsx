"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];


export default function Navbar() {

  const [activeSection, setActiveSection] = useState("about");


  useEffect(() => {

    const sections = navItems.map((item) =>
      document.querySelector(item.href)
    );


    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            setActiveSection(
              entry.target.id
            );

          }

        });

      },
      {
        threshold: 0.5,
      }
    );


    sections.forEach((section) => {

      if (section) {
        observer.observe(section);
      }

    });


    return () => {

      sections.forEach((section) => {

        if (section) {
          observer.unobserve(section);
        }

      });

    };


  }, []);



  return (

    <nav
      className="
      fixed top-0 left-0 z-50 w-full
      border-b border-zinc-800
      bg-zinc-950/80
      backdrop-blur-md
      "
    >

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">


        <a
          href="#home"
          className="text-xl font-bold text-white"
        >

          Rajat
          <span className="text-cyan-400">
            .
          </span>

        </a>



        <div className="flex gap-6 text-sm text-zinc-300">


          {navItems.map((item) => {

            const id = item.href.replace("#","");

            const active =
              activeSection === id;


            return (

              <a
                key={item.href}
                href={item.href}
                className="
                relative
                transition
                hover:text-cyan-400
                "
              >

                {item.name}


                {active && (

                  <motion.span
                    layoutId="navbar-active"
                    className="
                    absolute
                    -bottom-2
                    left-0
                    h-px
                    w-full
                    bg-cyan-400
                    "
                  />

                )}


              </a>

            );

          })}


        </div>


      </div>


    </nav>

  );

}