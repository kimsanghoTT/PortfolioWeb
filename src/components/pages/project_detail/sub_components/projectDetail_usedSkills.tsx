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
            <div className={styles.title}>
                <span className={`${styles.numIcon} ${styles.num02}`}><span className="hidden">넘버링아이콘</span></span>
                <span className={styles.titleText}>Used Skills</span>
            </div>
            <div className={styles.skill}>
                <div className={styles.skillListContainer}>
                    <span className={`${styles.subtitle} ${styles.language}`}>Languages</span>
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

                    <span className={`${styles.subtitle} ${styles.framework}`}>Framework / Library</span>
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
                    
                    {project.DB.length > 0 && (
                        <>
                        <span className={`${styles.subtitle} ${styles.db}`}>DB</span>
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
                        </>
                    )}
                </div>

            </div>
        </div>  
    )
}
export default UsedSkills
 