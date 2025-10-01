"use client"

import { RefObject, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface Props {
    homeRef: RefObject<HTMLDivElement | null>;
    contentBoxRef: RefObject<HTMLDivElement | null>; 
}

const useHomeScrollEvent = ({ homeRef, contentBoxRef }: Props) => {
    const scrolling = useRef<boolean>(false);
    
    useGSAP(() => {
        if(!homeRef.current || !contentBoxRef.current) return;
        ScrollTrigger.refresh();

        const animationContext = gsap.context(() => {

            const header = document.getElementById("mainHeader");
            const footer = document.getElementById("mainFooter");
            const darkModeBtn = document.getElementById("darkModeBtn");

            if(!header || !footer || !darkModeBtn) return;

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
                trigger: contentBoxRef.current,
                start: "top 1%",
                onEnter: () => showLayout(),
                onLeaveBack: () => hideLayout()
            })

            const wheelingScroll = (e:WheelEvent) => {

                if(scrolling.current){
                    e.preventDefault();
                    return;
                }

                e.preventDefault();
                scrolling.current = true;

                const direction = e.deltaY > 0 ? 1 : -1;
                const scrollRange = direction === 1 ? window.innerHeight : 0;

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

            homeRef.current?.addEventListener("wheel", wheelingScroll, { passive: false });

            return () => {

                homeRef.current?.removeEventListener("wheel", wheelingScroll);
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            }

        })

        return () => animationContext.revert();
    },{scope:homeRef})
}
export default useHomeScrollEvent;