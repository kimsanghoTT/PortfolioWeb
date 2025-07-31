"use client"

import Link from "next/link";
import styles from "./header.module.css";
import useLayoutAnimation from "../hooks/useScrollEvent";

const Header = () => {
    useLayoutAnimation();

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
                        <Link href={"/about"}>about</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;