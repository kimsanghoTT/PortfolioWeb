import gsap from "gsap";
import { RefObject, useEffect } from "react";
import styles from "../home/home.module.css";

interface Props {
    introRef: RefObject<HTMLElement | null>;
}

const useIntroVisual = ({introRef} : Props) => {

    // 텍스트 애니메이션 효과
    useEffect(() => {
        const timeout = setTimeout(() => {
            if(!introRef.current) return;

            const charElements = introRef.current.querySelectorAll(`.${styles.visualTextChar}`);
            if(charElements.length === 0) return;

            gsap.fromTo(charElements,{opacity: 0, x: -50}, {opacity: 1, x: 0, duration: 0.7, ease: "power1.out", stagger: 0.1});
        },10)

        return () => clearTimeout(timeout);
    },[introRef])


}
export default useIntroVisual;