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

const UsedSkills = ({project}: Props) => {

    return(
        <div className={`${styles.usedSkills} ${styles.listBlock}`}>
            <span className={styles.title}><span>Used Skills</span></span>
            <div className={styles.skill}>
                <span className={styles.subtitle}>Languages</span>
                <ul className={styles.languages}>
                    {project.languages.map((item, index) => (
                        <li key={index}>
                            <span>{item.name}</span>
                            <span className={styles.skillIcon} style={{background:`url(${item.image}) center/cover no-repeat`}}>
                                <span className="hidden">아이콘</span>
                            </span>
                        </li>

                    ))}
                </ul>

                <span className={styles.subtitle}>Framework / Library</span>
                <ul className={styles.frameworks}>
                    {project.frameworks.map((item, index) => (
                        <li key={index}>
                            <span>{item.name}</span>
                            <span className={styles.skillIcon} style={{background:`url(${item.image}) center/cover no-repeat`}}>
                                <span className="hidden">아이콘</span>
                            </span>
                        </li>
                    ))}
                </ul>

                <span className={styles.subtitle}>DB</span>
                <ul className={styles.dbs}>
                    {project.DB.map((item, index) => (
                        <li key={index}>
                            <span>{item.name}</span>
                            <span className={styles.skillIcon} style={{background:`url(${item.image}) center/cover no-repeat`}}>
                                <span className="hidden">아이콘</span>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>  
    )
}
export default UsedSkills
 