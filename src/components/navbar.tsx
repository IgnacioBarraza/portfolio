import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCode } from "@fortawesome/free-solid-svg-icons";

export const Navbar = ({
  scrollToSection,
}: {
  scrollToSection: (section: any) => void;
}) => {
  return (
    <header className="flex px-4 lg:px-6 h-20 items-center sm:border-b">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <FontAwesomeIcon icon={faBars} size="xl" />
            <span className="sr-only">Toggle navigation button</span>
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <Button
            variant={"ghost"}
            className="flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faCode} size="2xl" />
            <span className="sr-only">Ignacio Barraza's portfolio</span>
          </Button>
          <nav className="grid gap-4 py-6">
            <Button
              onClick={() => scrollToSection("projects")}
              className="text-lg font-medium hover:underline underline-offset-4"
              variant={"ghost"}
            >
              Projects
            </Button>
            <Button
              onClick={() => scrollToSection("skills")}
              className="text-lg font-medium hover:underline underline-offset-4"
              variant={"ghost"}
            >
              Skills
            </Button>
            <Button
              onClick={() => scrollToSection("workexperience")}
              className="text-lg font-medium hover:underline underline-offset-4"
              variant={"ghost"}
            >
              Work Experience
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="text-lg font-medium hover:underline underline-offset-4"
              variant={"ghost"}
            >
              Contact
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
      <Button
        variant={"ghost"}
        className="lg:flex items-center justify-center hidden"
      >
        <FontAwesomeIcon icon={faCode} size="2xl" />
        <span className="sr-only">Ignacio Barraza's portfolio</span>
      </Button>
      <div className="ml-auto hidden lg:flex gap-4 sm:gap-6">
        <Button
          onClick={() => scrollToSection("projects")}
          className="text-lg font-medium hover:underline underline-offset-4"
          variant={"ghost"}
        >
          Projects
        </Button>
        <Button
          onClick={() => scrollToSection("skills")}
          className="text-lg font-medium hover:underline underline-offset-4"
          variant={"ghost"}
        >
          Skills
        </Button>
        <Button
          onClick={() => scrollToSection("workexperience")}
          className="text-lg font-medium hover:underline underline-offset-4"
          variant={"ghost"}
        >
          Work Experience
        </Button>
        <Button
          onClick={() => scrollToSection("contact")}
          className="text-lg font-medium hover:underline underline-offset-4"
          variant={"ghost"}
        >
          Contact
        </Button>
      </div>
    </header>
  );
};
