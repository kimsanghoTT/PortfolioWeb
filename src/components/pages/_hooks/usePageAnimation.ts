import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface Props {
    contentRef: React.RefObject<HTMLDivElement | null>;
    styles: {[key:string]:string}
}

const usePageAnimation = ({contentRef, styles}: Props) => {

    useGSAP(() => {
        if (!contentRef.current) return;

        const animationContext = gsap.context((self) => {
            const sectionTitleTextChars = self.selector?.(`.${styles.sectionTitleTextChar}`);
            if(sectionTitleTextChars.length === 0) return;

            const animationTimeLine = gsap.timeline();

            animationTimeLine
            .to(`.${styles.sectionTitle}`, {"--after-width": "100%", duration: 1})
            .fromTo(sectionTitleTextChars,{x:150, opacity:0}, {x:0, opacity: 1, duration: 0.5, stagger:0.1, ease: "power2.inOut"})
            .fromTo(`.${styles.sectionTitle} p`, {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 0.5, stagger:0.2, ease: "power2.inOut"}, "<")
            
            if(styles.projectCard){
                animationTimeLine
                .fromTo(`.${styles.projectCard}`, 
                    {y: 50, opacity: 0, pointerEvents:"none"}, 
                    {y: 0, opacity: 1, pointerEvents:"all", duration: 0.5, stagger:0.2, ease: "power2.inOut"}, "<")
            }

            if(styles.content){
                animationTimeLine
                .fromTo(`.${styles.numIcon}`, {scale:0}, {scale:1, opacity:1, duration:0.5, stagger:0.3})
                .fromTo(`.${styles.subtitle} .${styles.titleText}`,{x:150}, {x:0, opacity:1, duration:0.5, stagger:0.3}, "<")
                .fromTo(`.${styles.kimsangho} p`, {y:50}, {opacity:1, y:0, duration:0.3, stagger:0.2})
                .fromTo(`.${styles.education} li`, {y:50}, {y:0, opacity:1, duration:0.3, stagger:0.2}, "<")
                .fromTo(`.${styles.certificate} li`, {y:50}, {y:0, opacity:1, duration:0.3, stagger:0.2}, "<")
                .fromTo(`.${styles.skillListTitle}`, {y:50}, {y:0, opacity:1, duration:0.3}, "<")
                .fromTo(`.${styles.skills} li`, {y:50}, {y:0, opacity:1, duration:0.3}, "<")
                .to(`.${styles.contactBox}`, {borderWidth:1, duration:0.3}, "<")
                .fromTo([`.${styles.contactBox} .${styles.email}`, `.${styles.contactBox} .${styles.git}`], 
                    {y:50}, {y:0, opacity:1, duration:0.3})
                .to(`.${styles.contactBox} a`, {opacity:1, duration:0.3})
            }
            
        }, contentRef.current)

        return () => animationContext.revert();
    },{scope: contentRef})
}
export default usePageAnimation;