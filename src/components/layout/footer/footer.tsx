"use client"

import Link from "next/link";
import useLayoutAnimation from "../_hooks/useLayoutAnimation";
import styles from "./footer.module.css";

const Footer = () => {
    useLayoutAnimation();

    return (
        <footer id="mainFooter" className={styles.footerContainer}>
            <div>
                <a href="mailto:qwert8494@naver.com">qwert8494@naver.com</a>
                <Link href="https://github.com/kimsanghoTT" target="_blank">https://github.com/kimsanghoTT</Link>
            </div>
            <div>©2024 KSHPF All Rights Reserved.</div>
        </footer>
    )
}
export default Footer;