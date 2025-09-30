"use client"

import styles from "./header.module.css";
import useLayoutAnimation from "../_hooks/useLayoutAnimation";
import { useState } from "react";
import M_HeaderNav from "./sub_components/m_header";
import Link from "next/link";

const Header = () => {
    useLayoutAnimation();

    const [m_handleMenu, setM_handleMenu] = useState<boolean>(false);

    const handleMobileMenu = () => {
        setM_handleMenu(prev => !prev);
    }

    return (
        <header id="mainHeader" className={styles.headerContainer}>
            <h1 className={styles.logoBox}>
                <Link href={"/home"}><span className={styles.logo}>KSH</span></Link>
                <span className="hidden">로고</span>
            </h1>
            <nav className={styles.navBox}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href={"/home"}>Home</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href={"/project"}>Project</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href={"/about"}>About</Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.m_menuBtnBox}>
                <span className={styles.m_menuBtn} onClick={handleMobileMenu}><em className="hidden">모바일메뉴열기</em></span>
            </div>
            <M_HeaderNav 
                onHandleM_Menu={handleMobileMenu} 
                setM_handleMenu={setM_handleMenu}
                m_handleMenu={m_handleMenu}
            />
        </header>
    )
}
export default Header;