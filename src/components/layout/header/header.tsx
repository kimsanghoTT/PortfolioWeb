"use client"

import Link from "next/link";
import styles from "./header.module.css";
import useLayoutAnimation from "../hooks/useScrollEvent";

const Header = () => {
    useLayoutAnimation();

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
        </header>
    )
}
export default Header;