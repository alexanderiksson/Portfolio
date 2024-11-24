import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header className="flex justify-center py-8 fixed w-full">
            <nav>
                <ul>
                    <li className="inline mx-8"><Link to="/">Home</Link></li>
                    <li className="inline mx-8"><Link to="/skills">Skills</Link></li>
                    <li className="inline mx-8"><Link to="/portfolio">Portfolio</Link></li>
                    <li className="inline mx-8"><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
