import { NavLink } from "react-router-dom";

export default function Header() {
    return(
        <header className="flex justify-center py-8 fixed w-full">
            <nav>
                <ul>
                    <li className="inline mx-4 sm:mx-8"><NavLink to="/">Home</NavLink></li>
                    <li className="inline mx-4 sm:mx-8"><NavLink to="/skills">Skills</NavLink></li>
                    <li className="inline mx-4 sm:mx-8"><NavLink to="/portfolio">Portfolio</NavLink></li>
                    <li className="inline mx-4 sm:mx-8"><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
