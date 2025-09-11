import { Dispatch, RefObject, SetStateAction, useCallback, useEffect } from "react";
import styles from "../header/header.module.css";
import gsap from "gsap";

interface Props{
        setM_handleMenu: Dispatch<SetStateAction<boolean>>
        m_handleMenu: boolean
        m_navBoxRef:RefObject<HTMLDivElement | null>;
}

const MobileNavEvent = ({setM_handleMenu, m_handleMenu, m_navBoxRef}: Props) => {

    // 뷰포트 변화 감지해서 모바일 메뉴 닫기
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 731) {
                setM_handleMenu(false);
            }
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [setM_handleMenu]);

    useEffect(() => {
        if(m_handleMenu){

            gsap.set(`.${styles.m_navBox} nav li`, {opacity:0, x:100});
            gsap.set(`.${styles.m_navBox} .${styles.m_logoBox}`, {opacity:0})
            gsap.set(`.${styles.m_navBox} .${styles.m_navBoxLower} a`, {opacity:0})


            gsap.to(`.${styles.m_navBox}.${styles.active} nav li`, {opacity:1, x:0, duration:0.3, stagger:0.2});
            gsap.to(`.${styles.m_navBox}.${styles.active} .${styles.m_logoBox}`, {opacity:1, duration:1})
            gsap.to(`.${styles.m_navBox}.${styles.active} .${styles.m_navBoxLower} a`, {opacity:1, stagger:0.1, duration:0.3})
        }
    },[m_handleMenu])

    const blockScroll = useCallback((e: WheelEvent | TouchEvent) => {
        if(m_handleMenu){
            e.preventDefault();
            e.stopPropagation();
        }
    },[m_handleMenu]);

    useEffect(() => {
        if (!m_handleMenu) return;

        const navBox = m_navBoxRef?.current;
        if(navBox){
            navBox.addEventListener("wheel", blockScroll, {passive: false});
            navBox.addEventListener("touchmove", blockScroll, {passive:false});
        }

        return () => {
            if(navBox) {
                navBox.removeEventListener("wheel", blockScroll);
                navBox.removeEventListener("touchmove", blockScroll);
            }
        }
    },[blockScroll])
}
export default MobileNavEvent;