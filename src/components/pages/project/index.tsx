"use client"
import { useMemo, useRef } from "react";
import styles from "./project.module.css";
import ProjectBoard from "./sub_components/project_board";
import useProjectContentAnimation from "../_hooks/useProjectContentAnimation";

const Project = () => {
    const contentBoxRef = useRef<HTMLDivElement | null>(null);
    const titleText = useMemo(() => "PROJECT".split(""), []);

    useProjectContentAnimation({ contentBoxRef, styles });

    return(
        <div className={styles.wrapper}>
            <section className={styles.contentBox} ref={contentBoxRef}>
                <div className={styles.sectionTitle}>
                    <h2 className={styles.title}>
                        {titleText.map ((char, index) => (
                            <span key={index} className={styles.sectionTitleTextChar}>{char}</span>
                        ))}
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