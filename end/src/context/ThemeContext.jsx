import { createContext, useState } from 'react';

// initial value dari context
// skeleton aja
export const ThemeContext = createContext({
    currentTheme: "",
    setCurrentTheme: () => { },
    theme: {
        light: {
            bgColor: ""
        },
        dark: {
            bgColor: ""
        }
    }
});

export default function ContextProvider({ children }) {
    const [currentTheme, setCurrentTheme] = useState("light")

    return (
        <ThemeContext.Provider value={{
            currentTheme,
            setCurrentTheme,
            theme: {
                light: {
                    bgColor: "bg-white p-5"
                },
                dark: {
                    bgColor: "bg-gray-700 p-5"
                }
            }
        }}>
            {children}
        </ThemeContext.Provider>
    )
}