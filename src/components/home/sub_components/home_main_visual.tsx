import { useRef } from 'react';
import styles from '../home.module.css';
import useIntroVisual from '../hooks/useIntroVisual';
import VisualParticle from './home_visual_particle';

const IntroVisual = () => {
    const introRef = useRef<HTMLElement | null>(null);

    useIntroVisual({introRef});

    return(
        <>
        <section className={styles.introVisual} ref={introRef}>
            <VisualParticle/>
            <div className={styles.textBox}>
                <p>HELLO, WORLD!</p>
                <p>KSH&apos;S PORTFOLIO</p>
            </div>
            <div className={styles.scrollGuide}>
                <span className={styles.scrollBox}>
                    <em className={styles.ico1}></em>
                    <em className={styles.ico2}></em>
                    <span className={styles.guideText}>Scroll</span>
                </span>
            </div>
        </section>
        </>

    )
}
export default IntroVisual;