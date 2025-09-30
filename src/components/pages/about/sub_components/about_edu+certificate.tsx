import styles from "../about.module.css";

const AboutEduCertificate = () => {
    return(
        <>
            <div className={`${styles.education} ${styles.listBlock}` }>
                <div className={styles.subtitle}>
                    <span className={`${styles.numIcon} ${styles.num02}`}><span className="hidden">넘버링아이콘</span></span>
                    <span className={styles.titleText}>Education</span>
                </div>
                <ul>
                    <li>(2024.04 - 2024.09) KH 정보교육원 강남지원 - JAVA 풀스택 과정 수료</li>
                    <li>(2025.04 - 2025.10) MBC컴퓨터아카데미 - 웹 퍼블리셔 & 프론트엔드 개발자 과정 수료</li>
                </ul>
            </div>
            <div className={`${styles.certificate} ${styles.listBlock}` }>
                <div className={styles.subtitle}>
                    <span className={`${styles.numIcon} ${styles.num03}`}><span className="hidden">넘버링아이콘</span></span>
                    <span className={styles.titleText}>Certificate</span>
                </div>
                <ul>
                    <li>2017.03 워드프로세서</li>
                    <li>2023.12 컴퓨터활용능력 2급</li>
                    <li>2025.09 정보처리기사</li>
                </ul>
            </div>
        </>
    )
}
export default AboutEduCertificate;