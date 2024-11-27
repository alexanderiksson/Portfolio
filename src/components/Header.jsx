import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

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

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen((open) => !open)
    }

    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {

        const handleScroll = () => {
          window.scrollY > 50 ? setScrolled(true) : setScrolled(false)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      }, [])


    return(
        <React.Fragment>
            <header className={`flex justify-end sm:justify-center py-4 sm:py-6 fixed w-full ${scrolled ? "scrolled" : ""}`}>
                <Navbar />

                {/* Hamburger menu */}
                <div className="block sm:hidden mr-8">
                    <img src="/hamburger.svg" alt="" width="40" onClick={toggleMenu} className="cursor-pointer" />
                </div>
            </header>

            {/* Mobile nav */}
            <div id="dropdown" className={`fixed sm:hidden h-screen w-48 px-8 py-6 bg-slate-900 ${isOpen ? "open" : ""}`}>
                <img src="/close.svg" alt="" width="25" onClick={toggleMenu} className="cursor-pointer" />
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
