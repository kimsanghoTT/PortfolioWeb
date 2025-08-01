"use client"

import styles from "./header.module.css";
import useLayoutAnimation from "../hooks/useScrollEvent";
import { useState } from "react";
import M_HeaderNav from "./sub_components/m_header";

const Header = () => {
    useLayoutAnimation();

    const [m_handleMenu, setM_handleMenu] = useState<boolean>(false);

    const handleMobileMenu = () => {
        setM_handleMenu(prev => !prev);
    }

    return (
        <header id="mainHeader" className={styles.headerContainer}>
            <h1 className={styles.logoBox}>
                <a href={"/home"}><span className={styles.logo}>KSH</span></a>
                <span className="hidden">로고</span>
            </h1>
            <nav className={styles.navBox}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <a href={"/home"}>Home</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href={"/project"}>Project</a>
                    </li>
                    <li className={styles.navItem}>
                        <a href={"/about"}>about</a>
                    </li>
                </ul>
            </nav>
            <div className={styles.m_menuBtnBox}>
                <span className={styles.m_menuBtn} onClick={handleMobileMenu}><em className="hidden">모바일메뉴열기</em></span>
            </div>
            {m_handleMenu && (
                <M_HeaderNav onHandleM_Menu={handleMobileMenu} setM_handleMenu={setM_handleMenu}/>
            )}

        </header>
    )
}
export default Header;