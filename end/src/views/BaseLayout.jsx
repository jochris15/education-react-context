import { Outlet } from "react-router-dom";
import Nav from '../components/Nav'
import { useContext } from 'react';
import { themeContext } from "../context/ThemeContext";

export default function BaseLayout() {
    const { currentTheme, theme } = useContext(themeContext);

    return (
        <div className="px-20" data-theme={theme[currentTheme].dataTheme}>
            <Nav />
            <Outlet />
        </div>
    )
}