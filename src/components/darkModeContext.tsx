"use client"

import { createContext, ReactNode, useState } from "react";

interface DarkModeType {
    darkMode:boolean;
    handleChangeDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeType>({
    darkMode: false,
    handleChangeDarkMode: () => {}
})

export const DarkModeProvider = ({ children }: { children: ReactNode }) => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const handleChangeDarkMode = () => {
        setDarkMode(prev => {
            if (!prev) document.body.classList.add("darkMode");
            else document.body.classList.remove("darkMode");
            return !prev;
        });
    };

    return(
        <DarkModeContext.Provider value={{darkMode, handleChangeDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}
export default DarkModeContext;