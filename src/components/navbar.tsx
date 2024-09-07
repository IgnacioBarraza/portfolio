import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Navbar({scrollToSection,}: {scrollToSection: (section: any) => void;}) {
  return (
    <header className="sticky top-0 z-50 px-4 lg:px-6 h-14 flex items-center border-b bg-[#0a0a0a]">
      <Link
        href={"/"}
        className="flex items-center justify-center"
        prefetch={false}
      >
        <FontAwesomeIcon icon={faCode} size="xl" />
        <span className="sr-only">Ignacio Barraza&apos;s portfolio</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <button
          onClick={() => scrollToSection("home")}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("workexperience")}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Work
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Projects
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Skills
        </button>
      </nav>
    </header>
  );
}
