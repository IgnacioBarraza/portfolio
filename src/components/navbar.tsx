import { faCode } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="flex flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link to={'/'} className="flex items-center justify-center">
          <FontAwesomeIcon icon={faCode} size="xl"/>
          <span className="sr-only">Ignacio Barraza's portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-8">
          <Link to={'projects'} className="text-lg font-medium hover:underline underline-offset-4">
            Projects
          </Link>
          <Link to={'skills'} className="text-lg font-medium hover:underline underline-offset-4">
            Skills
          </Link>
          <Link to={'workexperience'} className="text-lg font-medium hover:underline underline-offset-4">
            Work Experience
          </Link>
          <Link to={'contact'} className="text-lg font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </header>
    </div>
  )
}
