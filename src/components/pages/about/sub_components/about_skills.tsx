import { skills } from "../data"; 
import styles from "../about.module.css";
import { useState } from "react";
import gsap from "gsap";

const AboutSkills = () => {
    const [skillTab, setSkillTab] = useState("language");

    const handleSkillTab = (tab:string) => {
        setSkillTab(tab);
        setTimeout(() => {
            animateSkill();
        }, 10);
    }

    const animateSkill = () => {
        gsap.fromTo(`.${styles.skill}`, {y:50}, {y:0, opacity:1, duration:0.3, stagger:0.02})
    }
    return(
        <div className={`${styles.skills} ${styles.listBlock}` }>
            <div className={styles.subtitle}>
                <span className={`${styles.numIcon} ${styles.num02}`}><span className="hidden">넘버링아이콘</span></span>
                <span className={styles.titleText}>Skills</span>
            </div>
            <div className={styles.skillListContainer}>
                <ul className={styles.skillTab}>
                    <li className={`${styles.skillListTitle} ${skillTab === "language" ? styles.selected : ""}`} onClick={() => handleSkillTab("language")}>
                        language
                    </li>
                    <li className={`${styles.skillListTitle} ${skillTab === "framework" ? styles.selected : ""}`} onClick={() => handleSkillTab("framework")}>
                        Frameworks / Library
                    </li>
                    <li className={`${styles.skillListTitle} ${skillTab === "database" ? styles.selected : ""}`} onClick={() => handleSkillTab("database")}>
                        Database
                    </li>
                </ul>
                <div className={styles.skillList}>
                    {skillTab === "language" && (
                        <ul>
                            {skills.languages.map((language, index) => (
                                <li key={index} className={styles.skill}>
                                    <span className={styles.skillName}>{language.name}</span>
                                    <span 
                                    className={styles.skillIcon}
                                    style={{background:`url(${language.image}) center/cover no-repeat`}}>
                                        <span className="hidden">기술 아이콘</span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                    {skillTab === "framework" && (
                        <ul>
                            {skills.frameworks.map((framework, index) => (
                                <li key={index} className={styles.skill}>
                                    <span className={styles.skillName}>{framework.name}</span>
                                    <span 
                                    className={styles.skillIcon}
                                    style={{background:`url(${framework.image}) center/cover no-repeat`}}>
                                        <span className="hidden">기술 아이콘</span>
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                    {skillTab === "database" && (
                    <ul>
                        {skills.databases.map((db, index) => (
                            <li key={index} className={styles.skill}>
                                <span className={styles.skillName}>{db.name}</span>
                                <span 
                                className={styles.skillIcon} 
                                style={{background:`url(${db.image}) center/cover no-repeat`}}>
                                    <span className="hidden">기술 아이콘</span>
                                </span>
                            </li>
                        ))}
                    </ul>
                    )}
                </div>
            </div>
        </div>
    )
}
export default AboutSkills;