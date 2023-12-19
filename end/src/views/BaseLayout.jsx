import { Outlet } from "react-router-dom";
import { useContext } from "react";
import Nav from '../components/Nav'
import { themeContext } from '../context/ThemeContext'

export default function BaseLayout() {
    const { currentTheme, theme } = useContext(themeContext)

    return (
        <div data-theme={theme[currentTheme].dataTheme} className="px-20">
            <Nav />
            <Outlet />
        </div>
    )
}