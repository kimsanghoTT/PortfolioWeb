import styles from "../project.module.css";
import Projects from "../data.json"
import gsap from "gsap";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const ProjectBoard = () => {
    const boardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLAnchorElement>(`.${styles.projectCard}`);
        cards.forEach(card => {
            const mouseEnterAnimation = () => gsap.to(card, { scale: 1.05, filter: "grayscale(0.8)", duration: 0.5 });
            const mouseLeaveAnimation = () => gsap.to(card, {scale: 1, filter: "grayscale(0)", duration: 0.5});
            card.addEventListener("mouseenter", mouseEnterAnimation);
            card.addEventListener("mouseleave", mouseLeaveAnimation);

            return () => {
                card.removeEventListener("mouseenter", mouseEnterAnimation);
                card.removeEventListener("mouseleave", mouseLeaveAnimation);
            }
        })
    },{scope:boardRef})

    return(
        <div className={styles.projectBoard} ref={boardRef}>
            {Projects.map(project => (
            <Link 
                href={`/project_detail/${project.id}`} 
                key={project.id} 
                className={styles.projectCard} 
                style={{backgroundImage: `url(${project.image})`}}
            >
                <div className={styles.hoverBox}>
                    <span className={styles.text}>{project.title}</span>
                </div>
            </Link>
            ))}
        </div>
    )
}
export default ProjectBoard;