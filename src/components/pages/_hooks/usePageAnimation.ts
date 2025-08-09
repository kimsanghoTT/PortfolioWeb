import gsap from "gsap";
import { useLayoutEffect } from "react";

interface Props {
    contentRef: React.RefObject<HTMLDivElement | null>;
    styles: {[key:string]:string}
}

const usePageAnimation = ({contentRef, styles}: Props) => {

    useLayoutEffect(() => {
        const animationTimeout = setTimeout(() => {
            const triggerElement = contentRef.current;
            if (!triggerElement) return;

            const sectionTitleTextChars = triggerElement.querySelectorAll(`.${styles.sectionTitleTextChar}`);
            if(sectionTitleTextChars.length === 0) return;

            const animationTimeLine = gsap.timeline();

            animationTimeLine
            .to(`.${styles.sectionTitle}`, {"--after-width": "100%", duration: 1})
            .fromTo(sectionTitleTextChars,{x:150, opacity:0}, {x:0, opacity: 1, duration: 0.5, stagger:0.1, ease: "power2.inOut"})
            .fromTo(`.${styles.sectionTitle} p`, {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 0.5, stagger:0.2, ease: "power2.inOut"}, "<")
            .fromTo(`.${styles.projectCard}`, 
                {y: 50, opacity: 0, pointerEvents:"none"}, 
                {y: 0, opacity: 1, pointerEvents:"all", duration: 0.5, stagger:0.2, ease: "power2.inOut"}, "<")
        },10)

        return () => clearTimeout(animationTimeout);
    },[contentRef])
}
export default usePageAnimation;