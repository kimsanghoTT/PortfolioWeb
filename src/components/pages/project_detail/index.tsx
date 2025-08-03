"use client"
import { useParams } from "next/navigation";
import projectList from "../project/data.json";
import styles from "./projectDetail.module.css";
import Link from "next/link";

interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    languages: string[]; 
    frameworks: string[]; 
    DB: string;
    git: string;
    notion: string;
    link: string; 
}

const ProjectDetail = () => {
    const projectId = useParams().id;
    const project:Project | undefined = projectList.find(item => item.id === projectId);

    if (!project) {
        return <div className={styles.notFound}>프로젝트를 찾을 수 없습니다.</div>;
    }

    return(
        <div className={styles.wrapper} style={{background: `url(${project.image})`}}>
            <section className={styles.container}>
                <div className={styles.upperArea}>
                    <span className={styles.back}><span className="blind">뒤로가기</span></span>
                </div>
                <div className={styles.contentBox}>
                    <h2 className={styles.projectTitle}>
                        {project.title}
                    </h2>
                    <div className={styles.description}>
                        <span className={styles.title}>Description</span>
                        <p>{project.description}</p>
                    </div>
                    <div className={styles.usedSkills}>
                        <span className={styles.title}>Used Skills</span>
                        <ul className={styles.languages}>
                            <span className={styles.title}>Languages</span>
                            {project.languages.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <ul className={styles.frameworks}>
                            <span className={styles.title}>Framework / Library</span>
                            {project.frameworks.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <ul className={styles.dbs}>
                            <span className={styles.title}>DB</span>
                            <li>{project.DB}</li>
                        </ul>
                    </div>
                    <ul className={styles.linkList}>
                        <span className={styles.title}>References</span>
                        {project.link !== "" && (
                            <div className={styles.link}>
                                <span className={styles.title}>Link</span>
                                <Link href={project.link} target="_blank">{project.link}</Link>
                            </div>
                        )}
                        {project.git !== "" && (
                            <div className={styles.link}>
                                <span className={styles.title}>Github</span>
                                <Link href={project.git} target="_blank">{project.git}</Link>
                            </div>                       
                        )}
                        {project.notion !== "" && (
                            <div className={styles.link}>
                                <span className={styles.title}>Detail</span>
                                <Link href={project.notion} target="_blank">{project.notion}</Link>
                            </div>
                        )}                        
                    </ul>
                </div>
            </section>
        </div>
    )
}
export default ProjectDetail