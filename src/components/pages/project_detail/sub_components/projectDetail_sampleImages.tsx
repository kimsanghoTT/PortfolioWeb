import { useEffect, useRef, useState } from "react";
import styles from "../projectDetail.module.css";
import gsap from "gsap";

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

interface Props{
    project: Project;
}

const SampleImages = ({project}:Props) => {
    const [openImageModal, setOpenImageModal] = useState<string | null>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);

    const focusImage = (id:string) => {
        setOpenImageModal(id);
    }

    const closeImage = () => {
        gsap.to(`.${styles.imageModalWrapper}`, {opacity:0, duration:0.3})
        gsap.to(`.${styles.imageModalContainer}`, {scale:0.6, opacity:0, duration:0.3, onComplete:() => setOpenImageModal(null)});
    }

    const hoverEnter = (el: HTMLElement) => {
        gsap.to(el, { scale: 1.05, duration: 0.5 });
    };

    const hoverLeave = (el: HTMLElement) => {
        gsap.to(el, { scale: 1, duration: 0.5 });
    };

    useEffect(() => {
        if(openImageModal && modalRef.current){
            gsap.fromTo(`.${styles.imageModalWrapper}`, {opacity:0}, {opacity:1, duration:0.3})
            gsap.fromTo(`.${styles.imageModalContainer}`, {scale:0.6, opacity:0}, {scale:1, opacity:1, duration:0.3})
        }
    },[openImageModal])

    return (
        <div className={`${styles.sampleImages} ${styles.listBlock}`}>
            <div className={styles.title}>
                <span className={`${styles.numIcon} ${styles.num03}`}><span className="hidden">넘버링아이콘</span></span>
                <span className={styles.titleText}>Images</span>
            </div>
            <ul className={styles.imageBox}>
                {project.sampleImages.map(sampleImage => (
                    <>
                        <li 
                            className={styles.imageFrame} 
                            key={sampleImage.id} 
                            onClick={() => focusImage(sampleImage.id)}
                            onMouseEnter={(e) => hoverEnter(e.currentTarget)} 
                            onMouseLeave={(e) => hoverLeave(e.currentTarget)}
                        >
                            <figure className={styles.image}>
                                <img src={sampleImage.image} alt={sampleImage.id} />
                                <span className={styles.imageGuide}>클릭 시 확대</span>
                            </figure>
                        </li>          
                    </>
                ))}
            </ul>
            {openImageModal && (
                <div className={styles.imageModalWrapper} ref={modalRef}>
                    <div className={styles.imageModalContainer}>
                        <button className={styles.closeBtn} onClick={closeImage}><span className={styles.ico}></span></button>
                        <figure className={styles.imageModalFrame}>
                            <img src={project.sampleImages.find(image => image.id === openImageModal)?.image} alt="sampleImage" />
                        </figure>
                    </div>
                </div>   
            )}

        </div>
    )
}
export default SampleImages;