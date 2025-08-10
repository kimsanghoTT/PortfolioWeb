"use client"

import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./about.module.css";
import usePageAnimation from "../_hooks/usePageAnimation";

const About = () => {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [sectionTitle, setSectionTitle] = useState<ReactNode>([]);

    useEffect(() => {
        const titleText = "ABOUT";
        setSectionTitle(titleText.split("").map ((char, index) => (
            <span key={index} className={styles.sectionTitleTextChar}>{char}</span>
        )));
    },[])

    usePageAnimation({contentRef, styles});

    return(
        <div className={styles.wrapper}>
            <section className={styles.contentBox} ref={contentRef}>
                <div className={styles.sectionTitle}>
                    <h2 className={styles.title}>
                        {sectionTitle}
                    </h2>
                    <p>기술은 사람을 위한 도구이며, 경험은 그 가치를 완성합니다.</p>
                    <p>사람과 사람을 잇는 즐거운 웹 경험을 만드는 개발자가 되겠습니다."</p>
                </div>
                <div className={`${styles.kimsangho} ${styles.listBlock}` }>
                    <div className={styles.subtitle}>
                        <span className={`${styles.numIcon} ${styles.num01}`}><span className="hidden">넘버링아이콘</span></span>
                        <span className={styles.titleText}>Kim Sang Ho</span>
                    </div>
                    <p> </p>
                </div>
                <div className={`${styles.education} ${styles.listBlock}` }>
                    <div className={styles.subtitle}>
                        <span className={`${styles.numIcon} ${styles.num02}`}><span className="hidden">넘버링아이콘</span></span>
                        <span className={styles.titleText}>Education</span>
                    </div>
                    <p></p>
                </div>
                <div className={`${styles.certificate} ${styles.listBlock}` }>
                    <div className={styles.subtitle}>
                        <span className={`${styles.numIcon} ${styles.num03}`}><span className="hidden">넘버링아이콘</span></span>
                        <span className={styles.titleText}>Certificate</span>
                    </div>
                    <p></p>
                </div>
                <div className={`${styles.skills} ${styles.listBlock}` }>
                    <div className={styles.subtitle}>
                        <span className={`${styles.numIcon} ${styles.num04}`}><span className="hidden">넘버링아이콘</span></span>
                        <span className={styles.titleText}>Skills</span>
                    </div>
                    <p></p>
                </div>

            </section>
        </div>
    )
}
export default About;