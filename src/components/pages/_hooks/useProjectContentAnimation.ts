import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface Props {
    contentBoxRef: React.RefObject<HTMLDivElement | null>;
    styles: {[key:string]:string}
}

const useProjectContentAnimation = ({contentBoxRef, styles}: Props) => {

    useGSAP(() => {
        if (!contentBoxRef.current) return;

        const animationContext = gsap.context((self) => {
            const sectionTitleTextChars = self.selector?.(`.${styles.sectionTitleTextChar}`);
            if(sectionTitleTextChars.length === 0) return;

            const animationTimeLine = gsap.timeline();

            animationTimeLine
            .to(`.${styles.sectionTitle}`, {"--after-width": "100%", duration: 1})
            .fromTo(sectionTitleTextChars,{x:150, opacity:0}, {x:0, opacity: 1, duration: 0.5, stagger:0.1, ease: "power2.inOut"})
            .fromTo(`.${styles.sectionTitle} p`, {x: 50, opacity: 0}, {x: 0, opacity: 1, duration: 0.5, stagger:0.2, ease: "power2.inOut"}, "<")
            .fromTo(`.${styles.filterBox}`, {opacity:0}, {opacity:1, duration:0.5, ease: "power2.inOut"}, "<")
            .fromTo(`.${styles.mobileDragGuide}`, {opacity:0}, {opacity:1, duration:0.5, ease:"power2.inOut"}, "<")
            .fromTo(`.${styles.projectCard}`, 
                {y: 50, opacity: 0, pointerEvents:"none"}, 
                {y: 0, opacity: 1, pointerEvents:"all", duration: 0.5, stagger:0.2, ease: "power2.inOut"}, "<")
            
        }, contentBoxRef.current)

        return () => animationContext.revert();
    },{scope: contentBoxRef})
}
export default useProjectContentAnimation;