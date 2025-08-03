import styles from "../project.module.css";
import Projects from "../data.json"

const ProjectBoard = () => {

    return(
        <div className={styles.projectBoard}>
            {Projects.map(project => (
            <div key={project.id} className={styles.projectCard} style={{backgroundImage: `url(${project.image})`}}>
                <div className={styles.hoverBox}>
                    <span className={styles.text}>{project.title}</span>
                </div>
            </div>
            ))}

        </div>
    )
}
export default ProjectBoard;