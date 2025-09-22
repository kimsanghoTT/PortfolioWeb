import { useMemo, useRef } from 'react';
import styles from '../home.module.css';
import useIntroVisual from '../../_hooks/useIntroVisual';
import VisualParticle from './home_visual_particle';

const IntroVisual = () => {
    const introRef = useRef<HTMLElement | null>(null);
    const upperText = useMemo(() => "HELLO, WORLD!".split(""), []);
    const lowerText = useMemo(() => "KSH'S PORTFOLIO".split(""), []);

    useIntroVisual({introRef});

    return(
        <>
        <section className={styles.introVisual} ref={introRef}>
            <VisualParticle/>
            <div className={styles.introTextBox}>
                <p>
                    {upperText.map((char, index) => (
                        <span key={`hello-${index}`} className={styles.visualTextChar}>
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    ))}
                </p>
                <p>
                    {lowerText.map((char, index) => (
                        <span key={`portfolio-${index}`} className={styles.visualTextChar}>
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    ))}
                </p>
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