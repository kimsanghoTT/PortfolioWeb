import { Dispatch, SetStateAction, useRef } from "react";
import styles from "../header.module.css";
import useMobileNavEvent from "../../hooks/useMobileNavEvent";

type Props ={
    onHandleM_Menu: () => void
    setM_handleMenu: Dispatch<SetStateAction<boolean>>
    m_handleMenu: boolean
}

const M_HeaderNav = ({onHandleM_Menu, setM_handleMenu, m_handleMenu} : Props) => {
    const m_navBoxRef = useRef<HTMLDivElement | null>(null);

    useMobileNavEvent({m_handleMenu, m_navBoxRef, setM_handleMenu});

    return(
        <div ref={m_navBoxRef} className={`${styles.m_navBox} ${m_handleMenu ? styles.active : ""}`}>
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
                <a href="mailto:qwert8494@naver.com">qwert8494@naver.com</a>
                <br />
                <a href="https://github.com/kimsanghoTT" target="_blank">https://github.com/kimsanghoTT</a>
            </div>
        </div>
    )
}
export default M_HeaderNav;