import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar'
import { useContext } from 'react';
import { themeContext } from "../context/ThemeContext";

export default function BaseLayout() {
    const { currentTheme, theme } = useContext(themeContext)

    return (
        <>
            <div className={theme[currentTheme].bgColor}>
                <Navbar />
                <Outlet />
            </div>
        </>
    )
}