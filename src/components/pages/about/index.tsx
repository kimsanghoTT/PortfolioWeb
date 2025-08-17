"use client"

import { useRef } from "react";
import { skills } from "./data"; 
import styles from "./about.module.css";
import usePageAnimation from "../_hooks/usePageAnimation";
import Link from "next/link";

const About = () => {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const titleText = "ABOUT";

    usePageAnimation({contentRef, styles});


    return(
        <div className={styles.wrapper}>
            <section className={styles.contentBox} ref={contentRef}>
                <div className={styles.sectionTitle}>
                    <h2 className={styles.title}>
                        {titleText.split("").map ((char, index) => (
                            <span key={index} className={styles.sectionTitleTextChar}>{char}</span>
                        ))}
                    </h2>
                    <p>기술은 사람을 위한 도구이며, 경험은 그 가치를 완성합니다.</p>
                    <p>사람과 사람을 잇는 즐거운 웹 경험을 만드는 개발자가 되겠습니다.</p>
                </div>
                <div className={styles.content}>
                    <div className={`${styles.kimsangho} ${styles.listBlock}` }>
                        <div className={styles.subtitle}>
                            <span className={`${styles.numIcon} ${styles.num01}`}><span className="hidden">넘버링아이콘</span></span>
                            <span className={styles.titleText}>Kim Sang Ho</span>
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
                    <div className={`${styles.education} ${styles.listBlock}` }>
                        <div className={styles.subtitle}>
                            <span className={`${styles.numIcon} ${styles.num02}`}><span className="hidden">넘버링아이콘</span></span>
                            <span className={styles.titleText}>Education</span>
                        </div>
                        <ul>
                            <li>(2024. 04 - 2024.09) KH 정보교육원 강남지원 - JAVA 풀스택 과정 수료</li>
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
                            <li>2025.09 정보처리기사  제발</li>
                        </ul>
                    </div>
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
                    <div className={`${styles.contact} ${styles.listBlock}` }>
                        <div className={styles.subtitle}>
                            <span className={`${styles.numIcon} ${styles.num05}`}><span className="hidden">넘버링아이콘</span></span>
                            <span className={styles.titleText}>Contact</span>
                        </div>
                        <div className={styles.contactBox}>
                            <div>
                                <p className={styles.email}>EMAIL</p>
                                <a href="mailto:qwert8494@naver.com">qwert8494@naver.com</a>
                            </div>
                            <div>
                                <p className={styles.git}>Github</p>
                                <Link href="https://github.com/kimsanghoTT" target="_blank">https://github.com/kimsanghoTT</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default About;