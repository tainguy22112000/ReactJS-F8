import { useState, createContext } from "react";

const ThemeContext = createContext()

function ThemeProvider({children}) {
    const [theme, setTheme] = useState('dark')
    const handleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        console.log(theme)
      }

    const value = {
        theme, 
        handleTheme
    }

    return (
        <ThemeContext.Provider value ={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext}