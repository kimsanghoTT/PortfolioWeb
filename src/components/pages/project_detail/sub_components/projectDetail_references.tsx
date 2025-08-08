import Link from "next/link";
import styles from "../projectDetail.module.css";

interface Skills{
    name: string,
    image:string
}

interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    languages: Skills[]; 
    frameworks: Skills[]; 
    DB: Skills[];
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
            <span className={styles.title}><span>References</span></span>
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
    )
}
export default References;