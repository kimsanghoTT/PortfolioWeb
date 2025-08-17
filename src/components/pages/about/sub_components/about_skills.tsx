import { skills } from "../data"; 
import styles from "../about.module.css";

const AboutSkills = () => {
    return(
        <div className={`${styles.skills} ${styles.listBlock}` }>
            <div className={styles.subtitle}>
                <span className={`${styles.numIcon} ${styles.num04}`}><span className="hidden">넘버링아이콘</span></span>
                <span className={styles.titleText}>Skills</span>
            </div>
            <p className={styles.skillListTitle}>Language</p>
            <ul>
                {skills.languages.map((language, index) => (
                    <li key={index}>
                        <span className={styles.skillName}>{language.name}</span>
                        <span 
                        className={styles.skillIcon}
                        style={{background:`url(${language.image}) center/cover no-repeat`}}>
                            <span className="hidden">기술 아이콘</span>
                        </span>
                    </li>
                ))}
            </ul>
            <p className={styles.skillListTitle}>Frameworks / Library</p>
            <ul>
                {skills.frameworks.map((framework, index) => (
                    <li key={index}>
                        <span className={styles.skillName}>{framework.name}</span>
                        <span 
                        className={styles.skillIcon}
                        style={{background:`url(${framework.image}) center/cover no-repeat`}}>
                            <span className="hidden">기술 아이콘</span>
                        </span>
                    </li>
                ))}
            </ul>
            <p className={styles.skillListTitle}>Database</p>
            <ul>
                {skills.databases.map((db, index) => (
                    <li key={index}>
                        <span className={styles.skillName}>{db.name}</span>
                        <span 
                        className={styles.skillIcon} 
                        style={{background:`url(${db.image}) center/cover no-repeat`}}>
                            <span className="hidden">기술 아이콘</span>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default AboutSkills;