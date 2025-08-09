"use client"
import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./project.module.css";
import ProjectBoard from "./sub_components/project_board";
import usePageAnimation from "../_hooks/usePageAnimation";

const Project = () => {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const [sectionTitle, setSectionTitle] = useState<ReactNode>([]);

    useEffect(() => {
        const titleText = "PROJECT";
        setSectionTitle(titleText.split("").map ((char, index) => (
            <span key={index} className={styles.sectionTitleTextChar}>{char}</span>
        )));
    },[])


    usePageAnimation({ contentRef, styles });

    return(
        <div className={styles.wrapper}>
            <section className={styles.contentBox} ref={contentRef}>
                <div className={styles.sectionTitle}>
                    <h2 className={styles.title}>
                        {sectionTitle}
                    </h2>
                    <p>다양한 웹 애플리케이션을 제작하기 위해</p>
                    <p>React, Next.js, TypeScript, JavaScript등으로 만든 프로젝트들입니다.</p>
                </div>
                <div className={styles.boardContainer}>
                    <ProjectBoard/>
                </div>
            </section>
        </div>
    )
}
export default Project;