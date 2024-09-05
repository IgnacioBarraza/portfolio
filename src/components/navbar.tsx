import { faCode, faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [animating, setAnimating] = useState(false)

  const toggleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true)
    } else {
      setAnimating(true)
      setTimeout(() => {
        setMenuOpen(false)
        setAnimating(false)
      }, 300) // Match this with the animation duration (0.3s)
    }
  }

  // Close the menu if clicking outside of the sidebar
  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (menuOpen && target.closest(".sidebar") === null) {
      toggleMenu()
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [])

  return (
    <div className="flex flex-col" style={{ "borderBottomColor": "white", "borderBottomWidth": "1px" }}>
      <header className="px-4 lg:px-6 h-20 flex items-center justify-between">
        <Link to={'/'} className="flex items-center">
          <FontAwesomeIcon icon={faCode} size="xl" />
          <span className="sr-only">Ignacio Barraza's portfolio</span>
        </Link>

        {/* Mobile Menu Button */}
        {!menuOpen && (
          <button className="lg:hidden border-[1px] border-white rounded-[5px] w-10 h-10" onClick={toggleMenu} aria-label="Toggle menu">
            <FontAwesomeIcon icon={faBars} size="xl" />
          </button>
        )}

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex ml-auto gap-4 sm:gap-8">
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

        {/* Mobile Sliding Nav Links and Overlay */}
        {menuOpen && (
          <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleMenu}></div>

            {/* Sidebar */}
            <div
              className={`sidebar fixed top-0 left-0 h-full w-3/4 bg-black text-white z-20 transform ${
                animating ? 'animate-slide-out-left' : 'animate-slide-in-left'
              } lg:hidden`}
            >
              {/* Close Button inside Sidebar */}
              <div className="flex justify-end p-4">
                <button onClick={toggleMenu} aria-label="Close menu" className="border-2 border-white rounded-[10px] w-9 h-9">
                  <FontAwesomeIcon icon={faTimes} size="xl" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col mt-8 gap-4 px-4">
                <Link to={'projects'} className="text-lg font-medium hover:underline underline-offset-4" onClick={toggleMenu}>
                  Projects
                </Link>
                <Link to={'skills'} className="text-lg font-medium hover:underline underline-offset-4" onClick={toggleMenu}>
                  Skills
                </Link>
                <Link to={'workexperience'} className="text-lg font-medium hover:underline underline-offset-4" onClick={toggleMenu}>
                  Work Experience
                </Link>
                <Link to={'contact'} className="text-lg font-medium hover:underline underline-offset-4" onClick={toggleMenu}>
                  Contact
                </Link>
              </nav>
            </div>
          </>
        )}
      </header>
    </div>
  )
}
