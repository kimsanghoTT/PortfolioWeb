import styles from "../project.module.css";
import Projects from "../data.json"
import gsap from "gsap";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel } from "swiper/modules";
import ProjectCard from "./project_card";

interface Project {
    id: string;
    type: string;
    summary:string;
    title: string;
    description: string;
    video:string;
    image: string;
    languages: { name: string; image: string }[];
    frameworks: { name: string; image: string }[];
    DB: { name: string; image: string }[];
    techSummary: { languages: string[], frameworks: string[]};
    git: string;
    notion: string;
    link: string;
}

const ProjectBoard = () => {
    const [filteredItems, setFilteredItems] = useState<Project[]>(Projects);
    const [filterCondition, setFilterCondition] = useState<"All" | "Team" | "Single">("All");
    const [flippedCardId, setFlippedCardId] = useState<string[]>([]);

    useEffect(() => {
        let currentFilteredItems = Projects;

        if(filterCondition !== "All") currentFilteredItems = currentFilteredItems.filter(item => item.type === filterCondition);

        setFilteredItems(currentFilteredItems);
    },[filterCondition])

    const handleFlipCard = (id:string) => {
        setFlippedCardId(prev => {
            if(prev.includes(id)){
                return prev.filter(cardId => cardId !== id);
            }
            else{
                return [...prev, id];
            }
        })
    }

    const handleFilter = (condition: "All" | "Team" | "Single") => {
        setFilterCondition(condition);
        setTimeout(() => {
            animateCards();
        }, 10);
    }

    const animateCards = () => {
        gsap.fromTo(`.${styles.projectCard}`,
            { y: 50, opacity: 0, pointerEvents: "none" },
            { y: 0, opacity: 1, pointerEvents: "all", duration: 0.5, stagger: 0.2, ease: "power2.inOut" }
        );
    };

    return(
        <div className={styles.projectBoard}>
            <div className={styles.boardUpper}>
                <div className={styles.filterBox}>
                    {["All", "Team", "Single"].map(condition => (
                        <button 
                            key={condition} 
                            className={`${styles.filterCondition} ${filterCondition === condition ? styles.active : ""}`}
                            onClick={() => handleFilter(condition as typeof filterCondition)}
                        >
                            {condition}
                        </button>
                    ))}
                </div>
                <span className={styles.mobileDragGuide}>
                    <span>Drag</span>
                </span>
            </div>
            <Swiper 
                className={styles.projectCardList} 
                modules={[Mousewheel]} spaceBetween={20} mousewheel={true}
                breakpoints={{0:{slidesPerView:1}, 731:{slidesPerView:"auto"}}}
            >
                {filteredItems && filteredItems.map(project => (
                    <SwiperSlide key={project.id} className={styles.projectCard}>
                        <ProjectCard project={project} flippedCardId={flippedCardId} handleFlipCard={handleFlipCard}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default ProjectBoard;