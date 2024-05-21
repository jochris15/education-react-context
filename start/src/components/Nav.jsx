
import { Link } from "react-router-dom";

export default function Nav() {
    return (<>
        <nav className="navbar sticky top-0 z-10 p-3 bg-base-200 shadow">
            <div className="navbar-start">
                <Link to="/" className="text-2xl font-bold px-6">
                    <span className="text-accent">Hooman Ma Slave</span>
                </Link>
            </div>
            <div className="navbar-center">
                <i className="fa-xl fa-solid fa-moon cursor-pointer"></i>
                <i className="fa-xl fa-solid fa-sun cursor-pointer"></i>
            </div>
        </nav>
    </>)
}