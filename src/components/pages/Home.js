import projects from '../../img/projects.svg'
import styles from './Home.module.css'
import {FaPlus} from 'react-icons/fa'
import {Link} from 'react-router-dom'
export default function Home(){
    return(
        <>
        <div className={styles.section}>
            <h1>
                    Home
                </h1>
                <p>
                    Bem vindo ao Hand Lender!
                    Comece a publicar o seus projetos agora mesmo.
                </p>
                <img src={projects} width={300}></img>
                <Link to="/">
                    Criar Projeto
                    <FaPlus/>
                </Link>   
        </div>
        </>
    )
}