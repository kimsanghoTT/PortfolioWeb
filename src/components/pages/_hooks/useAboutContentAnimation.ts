import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface Props {
    contentBoxRef: React.RefObject<HTMLDivElement | null>;
    styles: {[key:string]:string}
}

const useAboutContentAnimation = ({contentBoxRef, styles}: Props) => {
    const scrolling = useRef(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        if(window.innerWidth <= 730) setIsMobile(true);

        const observeResizing = () => {
            setIsMobile(window.innerWidth <= 730);
        };

        window.addEventListener("resize", observeResizing);
        return () => window.removeEventListener("resize", observeResizing);
    }, []);

    useEffect(() => {

        if (isMobile) return;

        const contentBox = contentBoxRef.current;

        const handleAboutScroll = (direction:number) => {
            if(scrolling.current) return;

            scrolling.current = true;

            const currentScroll = window.scrollY;
            const headerHeight = document.getElementById("mainHeader")?.clientHeight ?? 80;
            const sectionTitleHeight = contentBoxRef.current?.querySelector(`.${styles.sectionTitle}`)?.clientHeight ?? 200;

            let scrollRange = 0;
            if (direction === 1) {
                scrollRange = currentScroll === 0 ? sectionTitleHeight : currentScroll + (window.innerHeight - headerHeight);
                
            } else {
                scrollRange = currentScroll === 0 ? 0 : currentScroll - (window.innerHeight - headerHeight);
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

        const wheelingScroll = (e:WheelEvent) => {
            e.preventDefault();
            const direction = e.deltaY > 0 ? 1 : -1;
            handleAboutScroll(direction);
        }

        const keyboardScroll = (e:KeyboardEvent) => {
            if(e.key === "ArrowDown"){
                e.preventDefault();
                handleAboutScroll(1);
            }
            else if(e.key === "ArrowUp"){
                e.preventDefault();
                handleAboutScroll(-1);
            }
        }

        contentBox?.addEventListener("wheel", wheelingScroll);
        window.addEventListener("keydown", keyboardScroll);
        
        return () => {
            contentBox?.removeEventListener("wheel", wheelingScroll);
            window.removeEventListener("keydown", keyboardScroll);
        }
    },[isMobile, contentBoxRef, styles])

    useGSAP(() => {
        if (!contentBoxRef.current) return;

        const animationSettingsPerMedia = gsap.matchMedia(contentBoxRef.current);

        const sectionTitleTextChars = contentBoxRef.current?.querySelectorAll(`.${styles.sectionTitleTextChar}`);
        if (!sectionTitleTextChars || sectionTitleTextChars.length === 0) return;

        const titleAnimationTimeLine = gsap.timeline();

        titleAnimationTimeLine
        .to(`.${styles.sectionTitle}`, {"--after-width": "100%", duration: 1})
        .fromTo(sectionTitleTextChars,{x:150, opacity:0}, {x:0, opacity: 1, duration: 0.5, stagger:0.1, ease: "power2.inOut"})
        .fromTo(`.${styles.sectionTitle} p`, {x: 50, opacity: 0}, {x: 0, opacity: 1, duration: 0.5, stagger:0.2, ease: "power2.inOut"}, "<")

        animationSettingsPerMedia.add("(max-width: 730px)", () => {
            aboutContentAnimation(true);
        })
        animationSettingsPerMedia.add("(min-width: 731px)", () => {
            aboutContentAnimation(false);
        })


        return () => animationSettingsPerMedia.revert();
    },{scope: contentBoxRef})


    const aboutContentAnimation = (isMobile:boolean) => {

        const introduceAnimationTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: `.${styles.introduce}`,   
                start: "top 80%",              
                end: "bottom 99%",
                toggleActions: isMobile ? "play none none none" :"play reverse play reverse", 
            }
        });

        introduceAnimationTimeline
        .fromTo(`.${styles.introduce} .${styles.numIcon}`, {scale:0, opacity:0}, {scale:1, opacity:1, duration:0.5, stagger:0.3})
        .fromTo(`.${styles.introduce} .${styles.subtitle} .${styles.titleText}`,{x:150, opacity:0}, {x:0, opacity:1, duration:0.5, stagger:0.3}, "<")
        .fromTo(`.${styles.introCard}`, {y:-100}, {y:0, opacity:1, duration:0.5, stagger:0.2, ease: "power2.inOut"}, "<")
        .fromTo(`.${styles.introIcon}`, {scale:0}, {scale:1, opacity:1, duration:0.3, stagger:0.2})
        .fromTo(`.${styles.cardTitle}`, {x:70}, {x:0, opacity:1, duration:0.5, stagger:0.1, ease:"power2.inOut"}, "<")
        .fromTo(`.${styles.kimsangho} p`, {y:50}, {opacity:1, y:0, duration:0.3, stagger:0.2})
        .fromTo(`.${styles.education} li`, {y:50}, {y:0, opacity:1, duration:0.3, stagger:0.2}, "<")
        .fromTo(`.${styles.certificate} li`, {y:50}, {y:0, opacity:1, duration:0.3, stagger:0.2}, "<")

        const skillsAnimationTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: `.${styles.skills}`,   
                start: "top 80%",              
                end: "bottom 99%",
                toggleActions: isMobile ? "play none none none" :"play reverse play reverse", 
            }
        });

        skillsAnimationTimeline
        .fromTo(`.${styles.skills} .${styles.numIcon}`, {scale:0, opacity:0}, {scale:1, opacity:1, duration:0.5, stagger:0.3})
        .fromTo(`.${styles.skills} .${styles.subtitle} .${styles.titleText}`,{x:150, opacity:0}, {x:0, opacity:1, duration:0.5, stagger:0.3}, "<")
        .fromTo(`.${styles.skillListTitle}`, {y:-70, opacity:0}, {y:0, opacity:1, duration:0.5, stagger:0.1})
        .fromTo(`.${styles.skillList}`, {y:-70, opacity:0}, {y:0, opacity:1}, "<")
        .fromTo(`.${styles.skill}`, {y:50, opacity:0}, {y:0, opacity:1, duration:0.3, stagger:0.02})

        const contactAnimationTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: `.${styles.contact}`,   
                start: "top 80%",              
                end: "bottom 99%",
                toggleActions: isMobile ? "play none none none" :"play reverse play reverse", 
            }
        });

        contactAnimationTimeline
        .fromTo(`.${styles.contact} .${styles.numIcon}`, {scale:0, opacity:0}, {scale:1, opacity:1, duration:0.5, stagger:0.3})
        .fromTo(`.${styles.contact} .${styles.subtitle} .${styles.titleText}`,{x:150, opacity:0}, {x:0, opacity:1, duration:0.5, stagger:0.3}, "<")
        .fromTo(`.${styles.contactBox}`, {opacity:0, borderWidth:0}, {borderWidth:1, opacity:1, duration:0.5})
        .fromTo(`.${styles.contactBox} p`,{opacity:0}, {opacity:1, stagger:0.2, duration:0.5})
        .fromTo(`.${styles.contactBox} a`, {opacity:0}, {opacity:1, duration:0.5})
    }

}
export default useAboutContentAnimation;


