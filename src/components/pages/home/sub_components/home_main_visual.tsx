import { ReactNode, useEffect, useRef, useState } from 'react';
import styles from '../home.module.css';
import useIntroVisual from '../../_hooks/useIntroVisual';
import VisualParticle from './home_visual_particle';

const IntroVisual = () => {
    const introRef = useRef<HTMLElement | null>(null);
    const [upperText, setUpperText] = useState<ReactNode>([]);
    const [lowerText, setLowerText] = useState<ReactNode>([]);

    useEffect(() => {
        const uppertxt = "HELLO, WORLD!";
        setUpperText(
            uppertxt.split("").map((char, index) => (
                <span key={`hello-${index}`} className={styles.visualTextChar}>
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))
        )

        const lowertxt = "KSH'S PORTFOLIO"
        setLowerText(
            lowertxt.split("").map((char, index) => (
                <span key={`portfolio-${index}`} className={styles.visualTextChar}>
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))
        );
    },[])

    useIntroVisual({introRef});

    return(
        <>
        <section className={styles.introVisual} ref={introRef}>
            <VisualParticle/>
            <div className={styles.introTextBox}>
                <p>{upperText}</p>
                <p>{lowerText}</p>
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