import styles from "../project.module.css";
import Projects from "../data.json"
import { useCallback } from "react";
import gsap from "gsap";
import Link from "next/link";

const ProjectBoard = () => {

    const enterMouse = useCallback((e:React.MouseEvent<HTMLAnchorElement>) => {
        gsap.to(e.currentTarget, {scale:1.05, filter:"grayscale(0.8)", duration:0.5});
    },[])
    const leaveMouse = useCallback((e:React.MouseEvent<HTMLAnchorElement>) => {
        gsap.to(e.currentTarget, {scale:1, filter:"grayscale(0)", duration:0.5});
    },[])

    return(
        <div className={styles.projectBoard}>
            {Projects.map(project => (
            <Link 
                href={`/project_detail/${project.id}`} 
                key={project.id} 
                className={styles.projectCard} 
                style={{backgroundImage: `url(${project.image})`}}
                onMouseEnter={enterMouse} onMouseLeave={leaveMouse}
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