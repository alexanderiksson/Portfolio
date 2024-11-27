import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import HamburgerIcon from "../assets/img/hamburger.svg"
import CloseIcon from "../assets/img/close.svg"
import { debounce } from "lodash"


const Navbar = () => {
    return(
        <nav className="hidden sm:block">
            <ul className="flex justify-center">
                <li className="mx-4 sm:mx-8">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="mx-4 sm:mx-8">
                    <NavLink to="/skills">Skills</NavLink>
                </li>
                <li className="mx-4 sm:mx-8">
                    <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
                <li className="mx-4 sm:mx-8">
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
};

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const toggleMenu = () => {
        setIsOpen((open) => !open)
    }


    useEffect(() => {

        const handleScroll = debounce(() => {
            if (window.scrollY > 30) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }, 10)

        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        }
      }, [])


    return(
        <React.Fragment>
            <header className={`flex justify-end sm:justify-center py-4 sm:py-6 fixed w-full ${scrolled ? "scrolled" : ""}`}>

                <Navbar />

                {/* Hamburger menu */}
                <div className="block sm:hidden mr-8">
                    <img src={HamburgerIcon} alt="" width="40" onClick={toggleMenu} className="cursor-pointer" />
                </div>

            </header>

            {/* Mobile nav */}
            <div id="dropdown" style={{right: isOpen ? 0 : "-100%" }}>
                <img src={CloseIcon} alt="" width="25" onClick={toggleMenu} className="cursor-pointer" />
                <nav className="mt-8">
                    <ul>
                        <li className="my-8">
                            <NavLink onClick={toggleMenu} to="/">Home</NavLink>
                        </li>
                        <li className="my-8">
                            <NavLink onClick={toggleMenu} to="/skills">Skills</NavLink>
                        </li>
                        <li className="my-8">
                            <NavLink onClick={toggleMenu} to="/portfolio">Portfolio</NavLink>
                        </li>
                        <li className="my-8">
                            <NavLink onClick={toggleMenu} to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </React.Fragment>


    )
}

export default Header
