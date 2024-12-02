import { useState } from 'react';
import { createContext } from 'react';

export const themeContext = createContext({
    currentTheme: '',
    setCurrentTheme: () => { },
    theme: {
        light: {
            bgColor: ''
        },
        dark: {
            bgColor: ''
        }
    }
});


export default function ThemeContext({ children }) {
    const [currentTheme, setCurrentTheme] = useState("light")

    return (
        <themeContext.Provider value={{
            currentTheme,
            setCurrentTheme,
            theme: {
                light: {
                    bgColor: 'p-5 bg-white'
                },
                dark: {
                    bgColor: 'p-5 bg-gray-700'
                }
            }
        }}>
            {children}
        </themeContext.Provider>
    );
}