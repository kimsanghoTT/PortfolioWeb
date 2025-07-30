"use client"

import { useRef } from 'react';
import styles from './home.module.css';
import HomeContents from './sub_components/home_contents';
import MainVisual from './sub_components/home_main_visual';
import useHomeScrollEvent from './hooks/useHomeScrollEvent';

const Home = () => {
    const homeRef = useRef<HTMLDivElement | null>(null);
    const contentBoxRef = useRef<HTMLDivElement | null>(null);
    useHomeScrollEvent({homeRef, contentBoxRef});

    return (
    <div className={styles.wrapper} ref={homeRef}>
        <MainVisual/>
        <HomeContents contentBoxRef={contentBoxRef}/>
    </div>
    )
}
export default Home;