import { Link } from "react-router-dom";
import {FaHandsHelping} from 'react-icons/fa'
import Container from "./Container";
import styles from './NavBar.module.css';

export default function NavBar() {
    const url = 'https://via.placeholder.com/150';
    return(
        <nav className={styles.Menu}>
            <Container>
                    <div className={styles.icon}>
                        <Link to="/">
                            <FaHandsHelping />
                        </Link>
                    </div>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Projects">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Forum">Fórum</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Contact">Contato</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Login">Login</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}