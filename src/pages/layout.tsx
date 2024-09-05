import { Navbar } from "../components/navbar"
import { Footer } from "@/components/footer"
import { useRef } from "react"
import { Projects } from "./projects"
import { Skills } from "./skills"
import { WorkExperience } from "./workexperience"
import { Contact } from "./contact"
import { About } from "./about"

export const Layout = () => {
  type SectionKeys = 'home' | 'projects' | 'skills' | 'workexperience' | 'contact';

  const sectionsRefs: Record<SectionKeys, React.RefObject<HTMLDivElement>> = {
    home: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    workexperience: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: SectionKeys) => {
    sectionsRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <div ref={sectionsRefs.home} id="home">
        <About />
      </div>
      <div ref={sectionsRefs.projects} id="projects">
        <Projects />
      </div>
      <div ref={sectionsRefs.skills} id="skills">
        <Skills />
      </div>
      <div ref={sectionsRefs.workexperience} id="workexperience">
        <WorkExperience />
      </div>
      <div ref={sectionsRefs.contact} id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
};
