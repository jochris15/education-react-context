
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { useContext } from "react";
import { themeContext } from "../context/ThemeContext";

export default function Nav() {
    const navigate = useNavigate()
    const { currentTheme, handleTheme } = useContext(themeContext)

    function handleLogout() {
        localStorage.clear()
        navigate('/login')
    }

    return (<>
        <nav className="navbar sticky top-0 z-10 p-3 bg-base-200 shadow">
            <div className="navbar-start">
                <Link to="/" className="text-2xl font-bold px-6">
                    <span className="text-accent">Hooman Ma Slave</span>
                </Link>
            </div>
            <div className="navbar-center">
                {
                    currentTheme == 'light' ?
                        (<i className="fa-xl fa-solid fa-moon cursor-pointer" onClick={handleTheme}></i>) :
                        (<i className="fa-xl fa-solid fa-sun cursor-pointer" onClick={handleTheme}></i>)
                }

            </div>
            <div className="navbar-end">
                <Link to="/add" className="btn btn-accent btn-sm mx-1">Add Product</Link>
                <Link to="/login" className="btn btn-neutral btn-sm mx-1">
                    Login
                </Link>
                <a onClick={handleLogout} className="btn btn-error btn-sm mx-1">
                    Logout
                </a>
            </div>
        </nav>
    </>)
}