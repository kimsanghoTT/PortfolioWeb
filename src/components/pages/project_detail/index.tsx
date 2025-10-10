"use client"
import { useParams } from "next/navigation";
import projectList from "../project/data.json";
import styles from "./projectDetail.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import gsap from "gsap";
import UsedSkills from "./sub_components/projectDetail_usedSkills";
import References from "./sub_components/projectDetail_references";
import { useGSAP } from "@gsap/react";
import SampleImages from "./sub_components/projectDetail_sampleImages";

interface Project {
    id: string;
    type: string;
    summary: string;
    title: string;
    description: string;
    video: string;
    image: string;
    sampleImages: { id: string; image: string }[];
    languages: { name: string; image: string }[];
    frameworks: { name: string; image: string }[];
    DB: { name: string; image: string }[];
    techSummary: { languages: string[], frameworks: string[]};
    git: string;
    notion: string;
    link: string;
}

const ProjectDetail = () => {
    const projectId = useParams().id;
    const project:Project | undefined = projectList.find(item => item.id === projectId);
    const router = useRouter();

    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const projectDetailAnimation = gsap.timeline();

        projectDetailAnimation
        .to(`.${styles.back}`, {opacity:1, duration:0.3})
        .to(`.${styles.projectTitle}`,{opacity:1, duration:0.3}, "<")
        .fromTo(`.${styles.numIcon}`, {scale:0}, {scale:1, opacity:1, duration:0.5, stagger:0.3})
        .fromTo(`.${styles.title} .${styles.titleText}`,{x:150}, {x:0, opacity:1, duration:0.5, stagger:0.3}, "<")
        .fromTo(`.${styles.description} p`, {y:50}, {opacity:1, y:0, duration:0.5, ease:"power2.inOut"})
        .fromTo(`.${styles.skillListContainer}`, {opacity:0}, {opacity:1, duration:0.5, ease:"power2.inOut"},"<")
        .fromTo(`.${styles.language}`, {y:50}, {y:0, opacity:1, duration:0.3, ease:"power2.inOut"})
        .fromTo(`.${styles.framework}`, {y:50}, {y:0, opacity:1, duration:0.3, ease:"power2.inOut"})
        .fromTo(`.${styles.db}`, {y:50}, {y:0, opacity:1, duration:0.3, ease:"power2.inOut"})
        .fromTo(`.${styles.languages} li`, {y:50}, {y:0, opacity:1, duration:0.3, stagger:0.1, ease:"power2.inOut"}, "<")
        .fromTo(`.${styles.frameworks} li`, {y:50}, {y:0, opacity:1, duration:0.3, stagger:0.1, ease:"power2.inOut"}, "<")
        .fromTo(`.${styles.dbs} li`, {y:50}, {y:0, opacity:1, duration:0.3, stagger:0.1, ease:"power2.inOut"}, "<")
        .fromTo(`.${styles.imageFrame}`, {y:50}, {y:0, opacity:1, duration:0.5, stagger:0.1, ease:"power2.inOut"}, "<")
        .fromTo(`.${styles.references} .${styles.subtitle}`, {y:50}, {y:0, opacity:1, duration:0.5, ease:"power2.inOut", stagger:0.3}, "<")
        .fromTo(`.${styles.link} a`, {x:50}, {x:0, opacity:1, duration:0.5, stagger:0.2, ease:"power2.inOut"}, "<")      
    },{scope:containerRef})

    const backToProject = () => {
        router.back();
    }

    if (!project) {
        return (
            <div className={styles.notFound}>
                <span>프로젝트를 찾을 수 없습니다.</span>
                <Link href={"/project"}>돌아가기</Link>
            </div>
        )
    }

    return(
        <div className={styles.wrapper} style={{background: `url(${project.image}) no-repeat center/cover`}}>
            <section className={styles.container} ref={containerRef}>
                <div className={styles.upperArea}>
                    <span className={styles.back} onClick={backToProject}><span className="hidden">뒤로가기</span></span>
                </div>
                <div className={styles.contentBox}>
                    <h2 className={styles.projectTitle}>
                        {project.title}
                    </h2>
                    <div className={`${styles.description} ${styles.listBlock}` }>
                        <div className={styles.title}>
                            <span className={`${styles.numIcon} ${styles.num01}`}><span className="hidden">넘버링아이콘</span></span>
                            <span className={styles.titleText}>Description</span>
                        </div>
                        <p>{project.description}</p>
                    </div>
                    <UsedSkills project={project}/>
                    <SampleImages project={project}/>
                    <References project={project}/>
                </div>
            </section>
        </div>
    )
}
export default ProjectDetail