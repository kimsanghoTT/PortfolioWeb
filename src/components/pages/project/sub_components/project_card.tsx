import { useState } from "react";
import styles from "../project.module.css";
import Link from "next/link";

interface Project {
    id: string;
    type: string;
    summary:string;
    title: string;
    description: string;
    video: string,
    image: string;
    languages: { name: string; image: string }[];
    frameworks: { name: string; image: string }[];
    DB: { name: string; image: string }[];
    git: string;
    notion: string;
    link: string;
}

interface Props{
    project: Project;
    flippedCardId: string[];
    handleFlipCard: (id:string) => void;
}

const ProjectCard = ({project, flippedCardId, handleFlipCard}: Props) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return(
        <div 
            className={`${styles.cardInner} ${flippedCardId.includes(project.id) ? styles.flipped : ""}`}>
            <div 
                className={styles.frontSide} 
                onMouseEnter={(e) => {
                    setIsHovered(true);

                    const video = e.currentTarget.querySelector("video");
                    video?.play();
                }}
                onMouseLeave={(e) => {
                    setIsHovered(false);

                    const video = e.currentTarget.querySelector("video");
                    video?.pause();
                    if(video) video.currentTime = 0;
                }}
                onClick={() => handleFlipCard(project.id)} 
                style={{backgroundImage: `url(${project.image})`}}
            >
                <video 
                    muted 
                    playsInline
                    className={isHovered ? styles.active : ""}
                >
                    <source src={project.video} type="video/mp4" />
                </video>
                <div className={styles.titleBox}>
                    <p>{project.title}</p>
                    <span className={styles.cardNotice}>Click!</span>
                </div>
            </div>
            <div className={styles.backSide}>
                <div className={styles.titleBox}>
                    <p>{project.title}</p>
                    <p>{project.summary}</p>
                </div>
                <div className={styles.languageTags}>
                    {project.languages.map((language, index) => (
                        <span className={styles.tag} key={index}>{language.name}</span>
                    ))}
                </div>
                <div className={styles.linkBox}>
                    <Link href={`/project_detail/${project.id}`}>자세히 보기</Link>
                    {project.link && <Link href={project.link} target="_blank">사이트 바로 가기</Link>}
                </div>
                <div className={styles.returnFrontSide}>
                    <button onClick={() => handleFlipCard(project.id)}>
                        <span className={styles.ico} ></span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ProjectCard;