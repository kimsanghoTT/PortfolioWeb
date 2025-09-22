import gsap from "gsap";
import { RefObject } from "react";
import styles from "../home/home.module.css";
import { useGSAP } from "@gsap/react";

interface Props {
    introRef: RefObject<HTMLElement | null>;
}

const useIntroVisual = ({introRef} : Props) => {

    // 텍스트 애니메이션 효과
    useGSAP(() => {
        if(!introRef.current) return;

        const animationContext = gsap.context((self) => {
            const charElements = self.selector?.(`.${styles.visualTextChar}`);
            if(charElements.length === 0) return;

            gsap.fromTo(charElements,{opacity: 0, x: -50}, {opacity: 1, x: 0, duration: 0.7, ease: "power1.out", stagger: 0.1});
        }, introRef.current);

        return () => animationContext.revert();
    }, {scope: introRef})
}
export default useIntroVisual;