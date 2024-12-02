import { RouterProvider } from "react-router-dom";
import router from "./router";
import { useContext } from "react";
import { themeContext } from "./context/ThemeContext";

export default function App() {
    const { currentTheme, theme } = useContext(themeContext);

    return (
        <>
            <div className={theme[currentTheme].bgColor}>
                <RouterProvider router={router} />
            </div >
        </>
    )
}