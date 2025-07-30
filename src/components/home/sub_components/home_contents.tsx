import { RefObject, useRef } from "react";
import styles from "../home.module.css";

interface Props {
  contentBoxRef: RefObject<HTMLDivElement | null>;
}

const HomeContents = ({ contentBoxRef }: Props) => {

    return(
        <>
        <section className={styles.contentBox} ref={contentBoxRef}>
            <div className={styles.content}>
                <h2 className={styles.sectionTitle}>
                    OVERVIEW
                </h2>
                <p>안녕하세요! 프론트엔드 개발자를 꿈꾸는 김상호입니다.</p>
                <br />
                <p>더 나은 경험과 더 나은 코드를 위해 항상 고민과 노력을 거듭하고 있습니다.</p>
                <p>React와 Next.js, TypeScript 같은 최신 기술을 통해 아이디어를 구체화하고, 배움을 멈추지 않으며 성장하고 있습니다.</p>
                <br />
                <p>아래의 &apos;Project&apos;와 &apos;About&apos;을 눌러 저의 경험과 이야기를 확인해보세요.</p>
            </div>
        </section>  
        </>

    )
}
export default HomeContents;