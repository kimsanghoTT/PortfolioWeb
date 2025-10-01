import Link from "next/link";
import styles from "../about.module.css";

const AboutContact = () => {
    return(
        <div className={`${styles.contact} ${styles.listBlock}` }>
            <div className={styles.subtitle}>
                <span className={`${styles.numIcon} ${styles.num03}`}><span className="hidden">넘버링아이콘</span></span>
                <span className={styles.titleText}>Contact</span>
            </div>
            <div className={styles.contactBox}>
                <div>
                    <p className={styles.email}>EMAIL</p>
                    <a href="mailto:qwert8494@naver.com">qwert8494@naver.com</a>
                </div>
                <div>
                    <p className={styles.git}>Github</p>
                    <Link href="https://github.com/kimsanghoTT" target="_blank">https://github.com/kimsanghoTT</Link>
                </div>
            </div>
        </div>
    )
}
export default AboutContact;