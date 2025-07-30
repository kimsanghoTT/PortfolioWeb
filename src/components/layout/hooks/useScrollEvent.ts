"use client"

import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const useLayoutAnimation = () => {
    const pathname = usePathname();
    const isHome = pathname === '/home';

    useEffect(() => {
        const header = document.getElementById("mainHeader");
        const footer = document.getElementById("mainFooter");

        if(isHome){
            gsap.set(header, {yPercent: -100, opacity:0, overwrite: true});
            gsap.set(footer, {yPercent: 100, opacity:0, overwrite: true});
        }
        else{
            gsap.fromTo(header, { yPercent: -100, opacity:0}, {yPercent:0, opacity:1, duration: 1, ease: "power2.out"});
            gsap.fromTo(footer, { yPercent: 100, opacity:0}, {yPercent:0, opacity:1, duration: 1, ease: "power2.out"});
        }

    },[isHome]);
}
export default useLayoutAnimation;