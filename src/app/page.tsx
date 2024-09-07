// src/app/page.tsx
"use client";

import Navbar from "@/components/navbar";
import { useRef } from "react";
import About from "./pages/about/page";
import { Projects } from "./pages/projects/page";
import Footer from "@/components/footer";

export default function Home() {
  type SectionKeys =
    | "home"
    | "projects"
    | "skills"
    | "workexperience"
    | "contact";

  const sectionsRefs: Record<SectionKeys, React.RefObject<HTMLDivElement>> = {
    home: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    workexperience: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: SectionKeys) => {
    sectionsRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <main className="flex-1">
        <div ref={sectionsRefs.home} id="home">
          <About />
        </div>
        <div ref={sectionsRefs.projects} id="projects">
          <Projects />
        </div>
        <div ref={sectionsRefs.skills} id="skills">
          {/* <Skills /> */}
        </div>
        <div ref={sectionsRefs.workexperience} id="workexperience">
          {/* <WorkExperience /> */}
        </div>
        <div ref={sectionsRefs.contact} id="contact">
          {/* <Contact /> */}
        </div>
      </main>
      <Footer />
    </>
  );
}
