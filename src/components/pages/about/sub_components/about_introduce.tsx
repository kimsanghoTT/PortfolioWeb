import styles from "../about.module.css";

const AboutIntroduce = () => {

    return(
        <div className={`${styles.introduce} ${styles.listBlock}`}>
            <div className={styles.subtitle}>
                <span className={`${styles.numIcon} ${styles.num01}`}><span className="hidden">넘버링아이콘</span></span>
                <span className={styles.titleText}>Introduce</span>
            </div>
            <div className={styles.introCardList}>
                <div className={styles.gridLeft}>
                    <div className={`${styles.introCard} ${styles.kimsangho}`}>
                        <div className={styles.cardUpper}>
                            <span className={styles.introIcon}><span className="hidden">소개아이콘</span></span>
                            <span className={styles.cardTitle}>Kim Sang Ho</span>
                        </div>
                        <p>
                            프론트엔드 개발자로서, 저는 사용성과 효율성, 미적 완성도 사이의 최적의 균형을 탐구하고 있습니다.
                            또한 작은 인터랙션 하나에도 맥락과 목적이 담겨 있다고 믿으며, 
                            사용자가 처음 마주하는 화면은 단순한 결과물이 아닌 수많은 고민과 선택의 집합이라 생각합니다.
                        </p>
                        <br />
                        <p>
                            사소한 디테일들이 모여 하나의 풍부한 경험을 만들고, 이는 곧 개발자와 사용자 간의 보이지 않는 
                            소통으로 이어집니다. 이러한 소통이 사용자에게 있어 즐거움과 편안함으로 느껴질 수 있도록 끊임없는 
                            관찰과 고민을 거듭하고 있습니다.
                        </p>
                        <br />
                        <p>
                            더 나은 경험은 한 사람의 아이디어가 아닌, 모두의 다양한 관점과 시도가 쌓여 이루어진다고 생각합니다. 
                            저 역시 팀과 함께 고찰하고 성취를 공유하며, 더 나은 방향을 찾아가는 개발자가 되고자 합니다.
                        </p>
                        <br />
                        <p>
                            기술은 결국 사람을 위한 도구라는 믿음 아래, 더 나은 연결과 경험을 만드는 개발자가 되는 것이 저의 목표입니다.
                        </p>
                    </div>
                </div>
                <div className={styles.gridRight}>
                    <div className={`${styles.introCard} ${styles.education}`}>
                        <div className={styles.cardUpper}>
                            <span className={styles.introIcon}><span className="hidden">소개아이콘</span></span>
                            <span className={styles.cardTitle}>Education</span>
                        </div>
                        <ul>
                            <li>(2021.02) 인하대학교 문화콘텐츠문화경영학과 졸업</li>
                            <li>(2024.04 - 2024.09) KH 정보교육원 강남지원 - JAVA 풀스택 과정 수료</li>
                            <li>(2025.04 - 2025.10) MBC컴퓨터아카데미 - 웹 퍼블리셔 & 프론트엔드 개발자 과정 수료</li>
                        </ul>
                    </div>
                    <div className={`${styles.introCard} ${styles.certificate}`}>
                        <div className={styles.cardUpper}>
                            <span className={styles.introIcon}><span className="hidden">소개아이콘</span></span>
                            <span className={styles.cardTitle}>Certificate</span>
                        </div>
                        <ul>
                            <li>2017.03 워드프로세서</li>
                            <li>2023.12 컴퓨터활용능력 2급</li>
                            <li>2025.09 정보처리기사</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutIntroduce;