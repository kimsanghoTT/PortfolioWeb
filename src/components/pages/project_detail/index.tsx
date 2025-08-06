"use client"
import { useParams } from "next/navigation";
import projectList from "../project/data.json";
import styles from "./projectDetail.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
    const router = useRouter();

    if (!project) {
        return <div className={styles.notFound}>프로젝트를 찾을 수 없습니다.</div>;
    }

    const backToProject = () => {
        router.back();
    }

    return(
        <div className={styles.wrapper} style={{background: `linear-gradient(to right, #fff 40%, transparent), url(${project.image}) no-repeat center/cover`}}>
            <section className={styles.container}>
                <div className={styles.upperArea}>
                    <span className={styles.back} onClick={backToProject}><span className="hidden">뒤로가기</span></span>
                </div>
                <div className={styles.contentBox}>
                    <h2 className={styles.projectTitle}>
                        {project.title}
                    </h2>
                    <div className={`${styles.description} ${styles.listBlock}` }>
                        <span className={styles.title}>Description</span>
                        <p>{project.description}</p>
                    </div>
                    <div className={`${styles.usedSkills} ${styles.listBlock}`}>
                        <span className={styles.title}>Used Skills</span>

                        <span className={styles.subtitle}>Languages</span>
                        <ul className={styles.languages}>
                            {project.languages.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        <span className={styles.subtitle}>Framework / Library</span>
                        <ul className={styles.frameworks}>
                            {project.frameworks.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        
                        <span className={styles.subtitle}>DB</span>
                        <ul className={styles.dbs}>
                            <li>{project.DB}</li>
                        </ul>
                    </div>
                    <div className={`${styles.linkList} ${styles.listBlock}`}>
                        <span className={styles.title}>References</span>
                        <ul>
                            {project.link !== "" && (
                                <li className={styles.link}>
                                    <span className={styles.subtitle}>Link</span>
                                    <Link href={project.link} target="_blank">{project.link}</Link>
                                </li>
                            )}
                            {project.git !== "" && (
                                <li className={styles.link}>
                                    <span className={styles.subtitle}>Github</span>
                                    <Link href={project.git} target="_blank">{project.git}</Link>
                                </li>                       
                            )}
                            {project.notion !== "" && (
                                <li className={styles.link}>
                                    <span className={styles.subtitle}>Detail</span>
                                    <Link href={project.notion} target="_blank">{project.notion}</Link>
                                </li>
                            )}      
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default ProjectDetail