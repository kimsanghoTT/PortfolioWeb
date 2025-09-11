"use client"
import { useContext, useEffect, useRef } from "react";
import styles from "./darkMode_btn.module.css";
import { usePathname } from "next/navigation";
import DarkModeContext from "@/components/darkModeContext";
import gsap from "gsap";

const DarkModeBtn = () => {
    const {darkMode, handleChangeDarkMode} = useContext(DarkModeContext);
    const darkModeBtn = useRef<HTMLDivElement>(null);
    const isHome = usePathname().includes("home");

    useEffect(() => {
        if(darkMode){
            darkModeBtn.current?.classList.add(`${styles.darkMode}`);
        }
        else{
            darkModeBtn.current?.classList.remove(`${styles.darkMode}`);
        }
    },[darkMode])

    useEffect(() => {
        if(!isHome) gsap.to(darkModeBtn.current, {yPercent:-1})
    },[isHome])

    return(
        <div id="darkModeBtn" className={styles.darkModeBtnContainer} ref={darkModeBtn}>
            <button onClick={handleChangeDarkMode} className={styles.darkModeBtn}>
                <span className={styles.modeDisplay}></span>
            </button>
        </div>
    )
}
export default DarkModeBtn;