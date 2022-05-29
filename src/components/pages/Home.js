import projects from '../../img/projects.svg'
import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'

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
                <img src={projects} width={300} alt='Drawing of a man using an laptop with a window behind'></img>
                <div className={styles.criar}> 
                    <LinkButton to="/Create" text="Criar Projeto"/>
                </div>   
        </div>
        </>
    )
}