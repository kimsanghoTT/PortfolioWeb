import { Dispatch, SetStateAction, useEffect } from "react";
import styles from "../header.module.css";
import gsap from "gsap";

type Props ={
    onHandleM_Menu: () => void
    setM_handleMenu: Dispatch<SetStateAction<boolean>>
}

const M_HeaderNav = ({onHandleM_Menu, setM_handleMenu} : Props) => {

    // 뷰포트 변화 감지해서 모바일 메뉴 닫기
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 731) {
                setM_handleMenu(false);
            }
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [setM_handleMenu]);

    return(
        <div className={styles.m_navBox}>
            <span className={styles.m_menuCloseBtn} onClick={onHandleM_Menu}><em className="hidden">모바일메뉴닫기</em></span>
            <div className={styles.m_navBoxUpper}>
                <h1 className={styles.m_logoBox}>
                    <a href={"/home"}><span className={styles.logo}>KSH</span></a>
                    <span className="hidden">로고</span>
                </h1>    
            </div>
            <nav className={styles.m_navList}>
                <ul className={styles.m_navList}>
                    <li className={styles.m_navItem}>
                        <a href={"/home"}>Home</a>
                    </li>
                    <li className={styles.m_navItem}>
                        <a href={"/project"}>Project</a>
                    </li>
                    <li className={styles.m_navItem}>
                        <a href={"/about"}>about</a>
                    </li>
                </ul>
            </nav>
            <div className={styles.m_navBoxLower}>
                <p>qwert8494@naver.com</p>
                <a href="https://github.com/kimsanghoTT" target="_blank">https://github.com/kimsanghoTT</a>
            </div>
        </div>
    )
}
export default M_HeaderNav;