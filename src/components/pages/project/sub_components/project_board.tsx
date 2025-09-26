import styles from "../project.module.css";
import Projects from "../data.json"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

interface Project {
    id: string;
    type: string;
    title: string;
    description: string;
    image: string;
    languages: { name: string; image: string }[];
    frameworks: { name: string; image: string }[];
    DB: { name: string; image: string }[];
    git: string;
    notion: string;
    link: string;
}

const ProjectBoard = () => {
    const boardRef = useRef<HTMLDivElement | null>(null);
    const cardListRef = useRef<HTMLDivElement | null>(null);
    const [filteredItems, setFilteredItems] = useState<Project[]>(Projects);
    const [filterCondition, setFilterCondition] = useState<"All" | "Team" | "Single">("All");

    useEffect(() => {
        let currentFilteredItems = Projects;

        if(filterCondition !== "All") currentFilteredItems = currentFilteredItems.filter(item => item.type === filterCondition);

        setFilteredItems(currentFilteredItems);
    },[filterCondition])

    useGSAP(() => {
        if(!boardRef.current || !cardListRef.current) return;

        const scrollLength = cardListRef.current.scrollWidth - cardListRef.current.clientWidth;

        gsap.to(cardListRef.current, {x:-scrollLength, ease:"none", scrollTrigger:{
            trigger: boardRef.current,
            start: "top-=80 top",
            end: () => `+=${scrollLength}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1
        }})

    },{scope:boardRef})

    return(
        <div className={styles.projectBoard} ref={boardRef}>
            <div className={styles.filterBox}>
                {["All", "Team", "Single"].map(condition => (
                    <button 
                        key={condition} 
                        className={`${styles.filterCondition} ${filterCondition === condition ? styles.active : ""}`}
                        onClick={() => setFilterCondition(condition as typeof filterCondition)}
                    >
                        {condition}
                    </button>
                ))}
            </div>
            <div className={styles.projectCardList} ref={cardListRef}>
                {filteredItems && filteredItems.map(project => (
                    <div key={project.id} className={styles.projectCard}>
                        <Link href={`/project_detail/${project.id}`}>{project.title}</Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ProjectBoard;