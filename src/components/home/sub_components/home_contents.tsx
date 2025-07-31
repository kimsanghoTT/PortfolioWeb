import { RefObject } from "react";
import styles from "../home.module.css";
import Image from "next/image";
import OverviewBorderSVG from "./home_border";


interface Props {
  contentBoxRef: RefObject<HTMLDivElement | null>;
}

const HomeContents = ({ contentBoxRef }: Props) => {

    return(
        <>
        <section className={styles.contentBox} ref={contentBoxRef}>
            <div className={styles.content}>
                <OverviewBorderSVG contentBoxRef={contentBoxRef}/>
                <div className={styles.mainContent}>
                    <h2 className={styles.sectionTitle}>
                        OVERVIEW
                    </h2>
                    <p className={styles.overviewIntro}>안녕하세요! 프론트엔드 개발자를 꿈꾸는 김상호입니다.</p>
                    <br />
                    <p>더 나은 경험과 더 나은 코드를 위해 항상 고민과 노력을 거듭하고 있습니다.</p>
                    <p>React와 Next.js, TypeScript 같은 최신 기술을 통해 아이디어를 구체화하고, 배움을 멈추지 않으며 성장하고 있습니다.</p>
                    <br />
                    <p>아래의 &apos;Project&apos;와 &apos;About&apos;을 눌러 저의 경험과 이야기를 확인해보세요.</p>
                    <div className={styles.btnBox}>
                        <div className={styles.linkBtn}>
                            <span className={styles.btnTitle}>Project</span>
                            <span className={styles.btnDesc}>프로젝트 소개, 관련 기록 보러가기!</span>
                        </div>
                        <div className={styles.linkBtn}>
                            <span className={styles.btnTitle}>About</span>
                            <span className={styles.btnDesc}>김상호는 누구인가? 알아보기!</span>
                        </div>
                    </div>
                </div>
                <div className={styles.overviewVisual}>
                    <Image src="/img/overview-visual.jpg" fill alt="overview-visual"/>
                </div>
            </div>
        </section>  
        </>

    )
}
export default HomeContents;