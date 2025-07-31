import React, { RefObject, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../home.module.css";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  contentBoxRef: RefObject<HTMLElement | null>;
}

const OverviewBorderSVG = ({ contentBoxRef }: Props) => {
  const pathRefs = React.useRef<SVGPathElement[]>([]);

useLayoutEffect(() => {
  const paths = pathRefs.current;

  const ctx = gsap.context(() => {
    requestAnimationFrame(() => {
      paths.forEach((path, index) => {
        if (!path || !contentBoxRef.current) return;

        const pathLength = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        const borderTimeline = gsap.timeline({ paused: true });
        borderTimeline.to(path, {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power1.out",
          delay: index * 0.7,
        });

        ScrollTrigger.create({
          trigger: contentBoxRef.current,
          start: "top 40%",
          onEnter: () => borderTimeline.play(),
        });
      });

      // 강제로 위치 재계산
      ScrollTrigger.refresh();
    });
  });

  return () => {
    ctx.revert();
    ScrollTrigger.getAll().forEach((st) => st.kill());
    gsap.killTweensOf(paths);
    pathRefs.current = [];
  };
}, [contentBoxRef]);


  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
        className={styles.borderBox}
    >   
      <path d="M0 0 H100" stroke="#555" strokeWidth="3" fill="none" ref={(el) => { if (el) pathRefs.current[0] = el; }} />
      <path d="M100 0 V100" stroke="#555" strokeWidth="1.2" fill="none" ref={(el) => { if (el) pathRefs.current[1] = el; }} />
      <path d="M100 100 H0" stroke="#555" strokeWidth="3" fill="none" ref={(el) => { if (el) pathRefs.current[2] = el; }} />
      <path d="M0 100 V0" stroke="#555" strokeWidth="1.2" fill="none" ref={(el) => { if (el) pathRefs.current[3] = el; }} />
    </svg>
  );
};

export default OverviewBorderSVG;