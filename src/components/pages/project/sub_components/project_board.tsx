import styles from "../project.module.css";
import Projects from "../data.json"
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
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
    git: string;
    notion: string;
    link: string;
}

const ProjectBoard = ({filteredItems}: Props) => {
    const boardRef = useRef<HTMLDivElement | null>(null);
    const cardListRef = useRef<SwiperRef | null>(null);
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
            <Swiper className={styles.projectCardList} ref={cardListRef} modules={[Mousewheel]} spaceBetween={20} slidesPerView={"auto"} mousewheel={true}>
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