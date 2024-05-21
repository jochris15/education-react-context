
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { themeContext } from "../context/ThemeContext";

export default function Nav() {
    const { currentTheme, setCurrentTheme } = useContext(themeContext)

    function handleTheme() {
        if (currentTheme == 'light') setCurrentTheme('dark')
        else setCurrentTheme('light')
    }

    return (<>
        <nav className="navbar sticky top-0 z-10 p-3 bg-base-200 shadow">
            <div className="navbar-start">
                <Link to="/" className="text-2xl font-bold px-6">
                    <span className="text-accent">Hooman Ma Slave</span>
                </Link>
            </div>
            <div className="navbar-center">
                {currentTheme == 'light' ? (
                    <i onClick={handleTheme} className="fa-xl fa-solid fa-moon cursor-pointer"></i>
                ) : (
                    <i onClick={handleTheme} className="fa-xl fa-solid fa-sun cursor-pointer"></i>
                )}
            </div>
        </nav>
    </>)
}