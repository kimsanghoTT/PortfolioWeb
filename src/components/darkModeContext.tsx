"use client"

import { createContext, ReactNode, useEffect, useState } from "react";

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

    useEffect(() => {
        const isDarkModeOn = localStorage.getItem("darkMode");
        if(isDarkModeOn === "true"){
            setDarkMode(true);
            document.body.classList.add("darkMode");
        }
    },[])

    const handleChangeDarkMode = () => {
        setDarkMode(prev => {
            const mode = !prev;
            if (mode) document.body.classList.add("darkMode");
            else document.body.classList.remove("darkMode");
            localStorage.setItem("darkMode", String(mode));
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