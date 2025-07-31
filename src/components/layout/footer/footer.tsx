"use client"

import Link from "next/link";
import useLayoutAnimation from "../hooks/useScrollEvent";
import styles from "./footer.module.css";

const Footer = () => {
    useLayoutAnimation();

    return (
        <footer id="mainFooter" className={styles.footerContainer}>
            <div>
                <p>qwert8494@naver.com</p>
                <Link href="https://github.com/kimsanghoTT" target="_blank">https://github.com/kimsanghoTT</Link>
            </div>
            <div>©2024 KSHPF All Rights Reserved.</div>
        </footer>
    )
}
export default Footer;