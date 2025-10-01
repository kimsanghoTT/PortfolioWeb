import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface Props {
    contentBoxRef: React.RefObject<HTMLDivElement | null>;
    styles: {[key:string]:string}
}

const useAboutContentAnimation = ({contentBoxRef, styles}: Props) => {
    const scrolling = useRef(false);

    useGSAP(() => {
        if (!contentBoxRef.current) return;

        const animationContext = gsap.context((self) => {
            const sectionTitleTextChars = self.selector?.(`.${styles.sectionTitleTextChar}`);
            if(sectionTitleTextChars.length === 0) return;

            const animationTimeLine = gsap.timeline({
                onComplete: () => {
                    const introduceAnimatioTimeline = gsap.timeline({
                        scrollTrigger: {
                            trigger: `.${styles.introduce}`,   
                            start: "top 80%",              
                            end: "bottom bottom",
                            toggleActions: "play reverse play reverse", 
                        }
                    });

                    introduceAnimatioTimeline
                    .fromTo(`.${styles.introduce} .${styles.numIcon}`, {scale:0}, {scale:1, opacity:1, duration:0.5, stagger:0.3})
                    .fromTo(`.${styles.introduce} .${styles.subtitle} .${styles.titleText}`,{x:150}, {x:0, opacity:1, duration:0.5, stagger:0.3}, "<")
                    .fromTo(`.${styles.introCard}`, {y:-100}, {y:0, opacity:1, duration:0.5, stagger:0.2, ease: "power2.inOut"}, "<")
                    .fromTo(`.${styles.introIcon}`, {scale:0}, {scale:1, opacity:1, duration:0.3, stagger:0.2})
                    .fromTo(`.${styles.cardTitle}`, {x:70}, {x:0, opacity:1, duration:0.5, stagger:0.1, ease:"power2.inOut"}, "<")
                    .fromTo(`.${styles.kimsangho} p`, {y:50}, {opacity:1, y:0, duration:0.3, stagger:0.2})
                    .fromTo(`.${styles.education} li`, {y:50}, {y:0, opacity:1, duration:0.3, stagger:0.2}, "<")
                    .fromTo(`.${styles.certificate} li`, {y:50}, {y:0, opacity:1, duration:0.3, stagger:0.2}, "<")
                }
            });

            animationTimeLine
            .to(`.${styles.sectionTitle}`, {"--after-width": "100%", duration: 1})
            .fromTo(sectionTitleTextChars,{x:150, opacity:0}, {x:0, opacity: 1, duration: 0.5, stagger:0.1, ease: "power2.inOut"})
            .fromTo(`.${styles.sectionTitle} p`, {x: 50, opacity: 0}, {x: 0, opacity: 1, duration: 0.5, stagger:0.2, ease: "power2.inOut"}, "<")

            const skillsAnimationTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: `.${styles.skills}`,   
                    start: "top 80%",              
                    end: "bottom bottom",
                    toggleActions: "play reverse play reverse", 
                }
            });

            skillsAnimationTimeline
            .fromTo(`.${styles.skills} .${styles.numIcon}`, {scale:0}, {scale:1, opacity:1, duration:0.5, stagger:0.3})
            .fromTo(`.${styles.skills} .${styles.subtitle} .${styles.titleText}`,{x:150}, {x:0, opacity:1, duration:0.5, stagger:0.3}, "<")
            .fromTo(`.${styles.skillListTitle}`, {y:-70, opacity:0}, {y:0, opacity:1, duration:0.5, stagger:0.1})
            .fromTo(`.${styles.skillList}`, {y:-70, opacity:0}, {y:0, opacity:1}, "<")
            .fromTo(`.${styles.skill}`, {y:50}, {y:0, opacity:1, duration:0.3, stagger:0.02})

            const contactAnimationTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: `.${styles.contact}`,   
                    start: "top 80%",              
                    end: "bottom bottom",
                    toggleActions: "play reverse play reverse", 
                }
            });

            contactAnimationTimeline
            .fromTo(`.${styles.contact} .${styles.numIcon}`, {scale:0}, {scale:1, opacity:1, duration:0.5, stagger:0.3})
            .fromTo(`.${styles.contact} .${styles.subtitle} .${styles.titleText}`,{x:150}, {x:0, opacity:1, duration:0.5, stagger:0.3}, "<")
            .fromTo(`.${styles.contactBox}`, {opacity:0, borderWidth:0}, {borderWidth:1, opacity:1, duration:0.5})
            .fromTo(`.${styles.contactBox} p`,{opacity:0}, {opacity:1, stagger:0.2, duration:0.5})
            .fromTo(`.${styles.contactBox} a`, {opacity:0}, {opacity:1, duration:0.5})

            const wheelingScroll = (e:WheelEvent) => {

                if(scrolling.current){
                    e.preventDefault();
                    return;
                }

                e.preventDefault();
                scrolling.current = true;

                const direction = e.deltaY > 0 ? 1 : -1;
                const currentScroll = window.scrollY;

                let scrollRange = 0;
                if (direction === 1) {
                    scrollRange = currentScroll === 0 ? 200 : currentScroll + (window.innerHeight - 80);
                } else {
                    scrollRange = currentScroll === 0 ? 0 : currentScroll - (window.innerHeight - 80);
                }

                gsap.to(window, {
                    scrollTo: scrollRange,
                    duration: 1,
                    ease: "power2.inOut",
                    overwrite: "auto",
                    onComplete: () => {
                        scrolling.current = false;
                    }
                })
            }

            contentBoxRef.current?.addEventListener("wheel", wheelingScroll, { passive: false });
            return () => contentBoxRef.current?.removeEventListener("wheel", wheelingScroll);
            
        }, contentBoxRef.current)

        return () => animationContext.revert();
    },{scope: contentBoxRef})
}
export default useAboutContentAnimation;