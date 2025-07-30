"use client"

import useLayoutAnimation from "../hooks/useScrollEvent";
import styles from "./footer.module.css";

const Footer = () => {
    useLayoutAnimation();

    return (
        <footer id="mainFooter" className={styles.footerContainer}>
            <div>
                <p>qwert8494@naver.com</p>
                <p>https://github.com/kimsanghoTT</p>
            </div>
            <div>©2024 KSHPF All Rights Reserved.</div>
        </footer>
    )
}
export default Footer;