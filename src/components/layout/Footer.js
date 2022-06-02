import {FaGithub} from 'react-icons/fa'
import {FaInfoCircle} from 'react-icons/fa'

import styles from './Footer.module.css'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.icon}>
                <FaGithub/>
                <span>
                <FaInfoCircle/>
                </span>
            </div>
            <p>
                <span>Hand Lender</span> &copy; 2022
            </p>
        </footer>
    )
}