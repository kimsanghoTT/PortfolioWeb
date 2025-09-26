import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import styles from "../home/home.module.css";
import { useGSAP } from "@gsap/react";

interface Props {
    contentBoxRef: React.RefObject<HTMLDivElement | null>;
    rectRef: React.RefObject<SVGRectElement | null>;
}

const useHomeContentAnimation = ({contentBoxRef, rectRef} : Props) => {

    useGSAP(() => {
        if(!contentBoxRef.current) return;
        ScrollTrigger.refresh();

        const animationContext = gsap.context((self) => {
            const deskTopView = window.matchMedia("(min-width: 731px)").matches;
            const rect = rectRef.current;

            const sectionTitleTextChars = self.selector?.(`.${styles.sectionTitleTextChar}`) || [];
            if(sectionTitleTextChars.length === 0) return;

            const animationTimeline = gsap.timeline({paused: true});

            if(deskTopView && rect){
                const rectLength = (rect.width.baseVal.value + rect.height.baseVal.value) * 2 + 3;
                gsap.set(rect, { strokeDasharray: rectLength, strokeDashoffset: rectLength });

                animationTimeline.to(rect, {strokeDashoffset: 0, duration: 2, ease: "power2.inOut"});
            }
            else{
                animationTimeline.to(`.${styles.sectionTitle}`, {"--after-width": "100%", duration: 1});
            }

            animationTimeline
            .fromTo(sectionTitleTextChars,{x:150, opacity:0}, {x:0, opacity: 1, duration: 0.5, stagger:0.1, ease: "power2.inOut"})
            .fromTo(`.${styles.content} p`, {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 0.5, stagger:0.2, ease: "power2.inOut"}, "<")
            .fromTo(`.${styles.linkBtn}`, {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 0.5, ease: "power2.inOut"}, "<")
            .fromTo(`.${styles.overviewVisual}`, {x:"110%"}, {x:0, duration: 1, ease: "power2.inOut"}, "<");

            const trigger = ScrollTrigger.create({
                trigger: contentBoxRef.current,
                start: "top 40%",
                onEnter: () => animationTimeline.play(),
                immediateRender: false,
            });

            return () => {
                animationTimeline.kill();
                trigger.kill();
            };
        }, contentBoxRef.current)

        return () => animationContext.revert();
    },{scope: contentBoxRef})
}
export default useHomeContentAnimation;