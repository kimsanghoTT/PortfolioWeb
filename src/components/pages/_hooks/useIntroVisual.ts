import gsap from "gsap";
import { RefObject, useEffect } from "react";
import styles from "../home/home.module.css";

interface Props {
    introRef: RefObject<HTMLElement | null>;
}

const useIntroVisual = ({introRef} : Props) => {

    // 텍스트 애니메이션 효과
    useEffect(() => {
        if(introRef.current) {
            const textElements = introRef.current.querySelectorAll(`.${styles.introTextBox} p`) as NodeListOf<HTMLElement>;

            textElements.forEach(element => {
                const wrapSpan = element.innerText.split("").map(char => {
                    return `<span class="${styles.visualTextChar}">${char}</span>`;
                }).join("");

                element.innerHTML = wrapSpan;
                const charElements = element.querySelectorAll(`.${styles.visualTextChar}`);
                gsap.fromTo(charElements,{opacity: 0, x: -50}, {opacity: 1, x: 0, duration: 0.7, ease: "power1.out", stagger: 0.1});
            })
        }
    },[introRef])


}
export default useIntroVisual;