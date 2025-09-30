"use client"

import { useRef } from "react";
import styles from "./about.module.css";
import usePageAnimation from "../_hooks/usePageAnimation";
import AboutSkills from "./sub_components/about_skills";
import AboutContact from "./sub_components/about_contact";
import AboutIntroduce from "./sub_components/about_introduce";

const About = () => {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const titleText = "ABOUT";

    usePageAnimation({contentRef, styles});

    return(
        <div className={styles.wrapper}>
            <section className={styles.contentBox} ref={contentRef}>
                <div className={styles.sectionTitle}>
                    <h2 className={styles.title}>
                        {titleText.split("").map ((char, index) => (
                            <span key={index} className={styles.sectionTitleTextChar}>{char}</span>
                        ))}
                    </h2>
                    <p>기술은 사람을 위한 도구이며, 경험은 그 가치를 완성합니다.</p>
                    <p>사람과 사람을 잇는 즐거운 웹 경험을 만드는 개발자가 되겠습니다.</p>
                </div>
                <div className={styles.content}>
                    <AboutIntroduce/>
                    <AboutSkills/>
                    <AboutContact/>
                </div>
            </section>
        </div>
    )
}
export default About;