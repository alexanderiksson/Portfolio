import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen((open) => !open)
    }

    return(
        <React.Fragment>
            <header className="flex justify-end sm:justify-center py-8 fixed w-full">
                <nav className="hidden sm:block">
                    <ul>
                        <li className="inline mx-4 sm:mx-8"><NavLink to="/">Home</NavLink></li>
                        <li className="inline mx-4 sm:mx-8"><NavLink to="/skills">Skills</NavLink></li>
                        <li className="inline mx-4 sm:mx-8"><NavLink to="/portfolio">Portfolio</NavLink></li>
                        <li className="inline mx-4 sm:mx-8"><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
                <div className="block sm:hidden mr-8">
                    <img src="/hamburger.svg" alt="" width="40" onClick={toggleMenu} className="cursor-pointer" />
                </div>
            </header>

            {/* Dropdown */}
            <div id="dropdown" className={`fixed h-screen w-48 px-8 py-6 bg-slate-900 ${isOpen ? "open" : ""}`}>
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
