import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../about.module.css";
import { Mousewheel } from "swiper/modules";
import { careers } from "../data";
import "swiper/css";

const AboutCareer = () => {
    return(
        <div className={`${styles.career} ${styles.listBlock}` }>
            <div className={styles.subtitle}>
                <span className={`${styles.numIcon} ${styles.num02}`}><span className="hidden">넘버링아이콘</span></span>
                <span className={styles.titleText}>Career</span>
            </div>
            <div className={`${styles.careerBox}`}>
                <Swiper
                    className={styles.careerCardList} 
                    spaceBetween={20}
                    breakpoints={{0:{slidesPerView:1}, 731:{slidesPerView:"auto"}}}
                >
                    {careers && careers.map(career => (
                        <SwiperSlide key={career.id} className={styles.careerCard}>
                            <div className={`${styles.careerCardContent}`}>
                                <span className={`${styles.innerTitle}`}>프로젝트명</span>
                                <span className={`${styles.innerContent}`}>{career.project}</span>
                            </div>
                            <div className={`${styles.careerCardContent}`}>
                                <span className={`${styles.innerTitle}`}>소속</span>
                                <span className={`${styles.innerContent}`}>{career.company}</span>
                            </div>
                            <div className={`${styles.careerCardContent}`}>
                                <span className={`${styles.innerTitle}`}>기간</span>
                                <span className={`${styles.innerContent}`}>{career.period}</span>
                            </div>
                            <div className={`${styles.careerCardContent}`}>
                                <span className={`${styles.innerTitle}`}>주요 업무</span>
                                <ul className={`${styles.careerList}`}>
                                    {career.tasks && career.tasks.map(task => (
                                        <li key={task}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
export default AboutCareer;