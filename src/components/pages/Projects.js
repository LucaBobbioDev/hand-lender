import styles from './Projects.module.css';
import projgeren from '../../img/projgeren.svg'
export default function Projects(){
    return(
        <>
            <h1>
                Projetos
            </h1>
            <p>
                Aqui é onde os seus projetos ficam armazenados, também é possível fazer o gerenciamento dos seu projetos
            </p>
            <img src={projgeren} width={300}></img>
        </> 
    )
}