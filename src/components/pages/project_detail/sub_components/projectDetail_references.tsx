import Link from "next/link";
import styles from "../projectDetail.module.css";

interface Project {
    id: string;
    type: string;
    summary: string;
    title: string;
    description: string;
    video: string;
    image: string;
    sampleImages: { id: string; image: string }[];
    languages: { name: string; image: string }[];
    frameworks: { name: string; image: string }[];
    DB: { name: string; image: string }[];
    techSummary: { languages: string[], frameworks: string[]};
    git: string;
    notion: string;
    link: string;
}

interface Props{
    project: Project;
}

const References = ({project}: Props) => {
    return(
        <div className={`${styles.references} ${styles.listBlock}`}>
            <div className={styles.title}>
                <span className={`${styles.numIcon} ${styles.num04}`}><span className="hidden">넘버링아이콘</span></span>
                <span className={styles.titleText}>References</span>
            </div>
            <ul>
                {project.link !== "" && (
                    <li className={styles.link}>
                        <span className={`${styles.subtitle} ${styles.deploy}`}>Link</span>
                        <Link href={project.link} target="_blank">{project.link}</Link>
                    </li>
                )}
                {project.git !== "" && (
                    <li className={styles.link}>
                        <span className={`${styles.subtitle} ${styles.github}`}>Github</span>
                        <Link href={project.git} target="_blank">{project.git}</Link>
                    </li>                       
                )}
                {project.notion !== "" && (
                    <li className={styles.link}>
                        <span className={`${styles.subtitle} ${styles.notion}`}>Detail</span>
                        <Link href={project.notion} target="_blank">{project.notion}</Link>
                    </li>
                )}      
            </ul>
        </div>
    )
}
export default References;