import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import styles from "../home/home.module.css";

interface Props {
    contentBoxRef: React.RefObject<HTMLDivElement | null>;
    rectRef: React.RefObject<SVGRectElement | null>;
}

const useHomeContentAnimation = ({contentBoxRef, rectRef} : Props) => {

    useLayoutEffect(() => {
        if(window.scrollY > 0){
            window.scrollTo(0,0);
        }
    }, [contentBoxRef]);

    useLayoutEffect(() => {
        const deskTopView = window.matchMedia("(min-width: 731px)").matches;
        const mobileView = window.matchMedia("(max-width: 730px)").matches;

        const sectionTitleElements = contentBoxRef.current?.querySelectorAll(`.${styles.sectionTitle}`) as NodeListOf<HTMLElement>;
        sectionTitleElements.forEach(element => {
            const wrapSpan = element.innerText.split("").map(char => {
                return `<span class="${styles.sectionTitleTextChar}">${char}</span>`;
            }).join("");

            element.innerHTML = wrapSpan;
        })

        const rect = rectRef.current;
        const triggerElement = contentBoxRef.current;

        if (!triggerElement) return;

        const animationTimeLine = gsap.timeline({ paused: true });

        if (deskTopView && rect) {
            const rectLength = (rect.width.baseVal.value + rect.height.baseVal.value) * 2;
            gsap.set(rect, { strokeDasharray: rectLength, strokeDashoffset: rectLength });

            animationTimeLine.
            to(rect, {strokeDashoffset: 0, duration: 2, ease: "power2.inOut",});
        }
        if(mobileView){
            animationTimeLine.to(`.${styles.sectionTitle}`, {"--after-width": "100%", duration: 0.3});
        }

        animationTimeLine
        .fromTo(`.${styles.sectionTitleTextChar}`,{x:50, opacity:0}, {x:0, opacity: 1, duration: 0.5, stagger:0.1, ease: "power2.inOut"})
        .fromTo(`.${styles.content} p`, {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 0.5, stagger:0.2, ease: "power2.inOut"}, "<")
        .fromTo(`.${styles.linkBtn}`, {y: 50, opacity: 0}, {y: 0, opacity: 1, duration: 0.5, ease: "power2.inOut"}, "<")
        .fromTo(`.${styles.overviewVisual}`, {x:"110%"}, {x:0, duration: 1, ease: "power2.inOut"}, "<");

        const trigger = ScrollTrigger.create({
            trigger: triggerElement,
            start: "top 40%",
            onEnter: () => animationTimeLine.play(),
            immediateRender: false,
        });

        ScrollTrigger.refresh();

        return () => {
            animationTimeLine.kill();
            trigger.kill();
        };
    }, [contentBoxRef, rectRef]);
}
export default useHomeContentAnimation;