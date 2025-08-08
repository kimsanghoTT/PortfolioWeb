"use client"
import { useParams } from "next/navigation";
import projectList from "../project/data.json";
import styles from "./projectDetail.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import UsedSkills from "./sub_components/projectDetail_usedSkills";
import References from "./sub_components/projectDetail_references";

interface Skills{
    name: string,
    image:string
}

interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    languages: Skills[]; 
    frameworks: Skills[]; 
    DB: Skills[];
    git: string;
    notion: string;
    link: string; 
}

const ProjectDetail = () => {
    const projectId = useParams().id;
    const project:Project | undefined = projectList.find(item => item.id === projectId);
    const router = useRouter();

    useLayoutEffect(() => {
        const animationTimeOut = setTimeout(() => {
            const projectDetailAnimation = gsap.timeline();

            projectDetailAnimation
            .to(`.${styles.projectTitle}`,{opacity:1, duration:0.3})
            .fromTo(`.${styles.title}`,{x:150}, {x:0, opacity:1, duration:0.5, stagger:0.3})

        }, 10)

        return () => clearTimeout(animationTimeOut);
    },[])

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
        <div className={styles.wrapper} style={{background: `linear-gradient(to right, #fff 40%, transparent), url(${project.image}) no-repeat center/cover`}}>
            <section className={styles.container}>
                <div className={styles.upperArea}>
                    <span className={styles.back} onClick={backToProject}><span className="hidden">뒤로가기</span></span>
                </div>
                <div className={styles.contentBox}>
                    <h2 className={styles.projectTitle}>
                        {project.title}
                    </h2>
                    <div className={`${styles.description} ${styles.listBlock}` }>
                        <span className={styles.title}><span>Description</span></span>
                        <p>{project.description}</p>
                    </div>
                    <UsedSkills project={project}/>
                    <References project={project}/>
                </div>
            </section>
        </div>
    )
}
export default ProjectDetail