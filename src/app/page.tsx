// src/app/page.tsx
"use client";

import Navbar from "@/components/navbar";
import { useRef } from "react";
import About from "./about/page";
import Projects from "./projects/page";
import Footer from "@/components/footer";
import Skills from "./skills/page";
import WorkExperience from "./workexperience/page";

export default function Home() {
  type SectionKeys =
    | "home"
    | "projects"
    | "skills"
    | "workexperience"

  const sectionsRefs: Record<SectionKeys, React.RefObject<HTMLDivElement>> = {
    home: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    workexperience: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: SectionKeys) => {
    sectionsRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="flex flex-col min-h-[100dvh]">
        <Navbar scrollToSection={scrollToSection} />
        <main className="flex-1">
          <div ref={sectionsRefs.home} id="home">
            <About />
          </div>
          <div ref={sectionsRefs.workexperience} id="workexperience">
            <WorkExperience />
          </div>
          <div ref={sectionsRefs.projects} id="projects">
            <Projects />
          </div>
          <div ref={sectionsRefs.skills} id="skills">
            <Skills />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
