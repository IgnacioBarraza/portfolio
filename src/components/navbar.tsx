import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCode } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="flex px-4 lg:px-6 h-20 items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <FontAwesomeIcon icon={faBars} size="xl" />
            <span className="sr-only">Toggle navigation button</span>
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <Link to={"/"} className="flex items-center justify-center">
            <FontAwesomeIcon icon={faCode} size="2xl" />
            <span className="sr-only">Ignacio Barraza's portfolio</span>
          </Link>
          <nav className="grid gap-4 py-6">
            <Link to={"projects"} className="text-lg font-medium hover:">
              Projects
            </Link>
            <Link to={"skills"} className="text-lg font-medium hover:">
              Skills
            </Link>
            <Link to={"workexperience"} className="text-lg font-medium hover:">
              Work Experience
            </Link>
            <Link to={"contact"} className="text-lg font-medium hover:">
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <Link to={"/"} className="lg:flex items-center justify-center hidden">
        <FontAwesomeIcon icon={faCode} size="2xl" />
        <span className="sr-only">Ignacio Barraza's portfolio</span>
      </Link>
      <div className="ml-auto hidden lg:flex gap-4 sm:gap-6">
        <Link to={"projects"} className="text-lg font-medium hover:">
          Projects
        </Link>
        <Link to={"skills"} className="text-lg font-medium hover:">
          Skills
        </Link>
        <Link to={"workexperience"} className="text-lg font-medium hover:">
          Work Experience
        </Link>
        <Link to={"contact"} className="text-lg font-medium hover:">
          Contact
        </Link>
      </div>
    </header>
  );
};
