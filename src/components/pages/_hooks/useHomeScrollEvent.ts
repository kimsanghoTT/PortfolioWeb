"use client"

import { RefObject, useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface Props {
    homeRef: RefObject<HTMLDivElement | null>;
    contentBoxRef: RefObject<HTMLDivElement | null>; 
}

const useHomeScrollEvent = ({ homeRef, contentBoxRef }: Props) => {
    const scrolling = useRef<boolean>(false);
    const headerRef = useRef<HTMLElement | null>(null);
    const footerRef = useRef<HTMLElement | null>(null);
    const darkModeBtnRef = useRef<HTMLElement | null>(null);
    
    useEffect(() => {
        headerRef.current = document.getElementById("mainHeader");
        footerRef.current = document.getElementById("mainFooter");
        darkModeBtnRef.current = document.getElementById("darkModeBtn");
        gsap.set(window, { scrollTo: 0 }); 
        ScrollTrigger.refresh();
    },[])

    const wheelingScroll = useCallback((e:WheelEvent) => {

        if(scrolling.current){
            e.preventDefault();
            return;
        }

        e.preventDefault();
        scrolling.current = true;

        const direction = e.deltaY > 0 ? 1 : -1;
        const scrollRange = direction === 1 ? window.innerHeight : 0;

        gsap.to(window, {
            scrollTo: {y:scrollRange, autoKill: false},
            duration: 1,
            ease: "power2.inOut",
            onComplete: () => {
                scrolling.current = false;
            }
        })
    },[])

    useEffect(() => {
        const home = homeRef.current;
        const header = headerRef.current;
        const footer = footerRef.current;
        const darkModeBtn = darkModeBtnRef.current;
        const contentBox= contentBoxRef.current;

        if (!home || !header || !footer || !contentBox) {
            return; 
        }

        const showLayout = () => {
            gsap.to(header, { yPercent: 0, opacity: 1, duration: 0.5, ease: 'power1.out'});
            gsap.to(footer, { yPercent: 0, opacity: 1, duration: 0.5, ease: 'power1.out'});
            gsap.to(darkModeBtn, {yPercent: -190, duration: 0.5, ease: 'power1.out'});
        }

        const hideLayout = () => {
            gsap.to(header, { yPercent: -100, opacity: 0, duration: 0.5, ease: 'power1.out'});
            gsap.to(footer, { yPercent: 100, opacity: 0, duration: 0.5, ease: 'power1.out'});
            gsap.to(darkModeBtn, {yPercent: -1, duration: 0.5, ease: 'power1.out'});
        }

        ScrollTrigger.create({
            trigger: contentBox,
            start: "top 1%",
            onEnter: () => showLayout(),
            onLeaveBack: () => hideLayout()
        })

        home.addEventListener("wheel", wheelingScroll, { passive: false });

        return () => {

            home.removeEventListener("wheel", wheelingScroll);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        }

    },[contentBoxRef, homeRef, wheelingScroll]);

}
export default useHomeScrollEvent;