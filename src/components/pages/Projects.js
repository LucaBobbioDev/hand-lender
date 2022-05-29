import styles from './Projects.module.css';
import projgeren from '../../img/projgeren.svg'
import Section from '../layout/Section';

export default function Projects(){
    return(
        <>
            <Section>
                <h1>
                    Projetos
                </h1>
                <p>
                    Aqui é onde os seus projetos ficam armazenados, também é possível fazer o gerenciamento dos seu projetos
                </p>
                <img src={projgeren} width={300} alt='Drawing of a man looking at 3 different wireframes'></img>
            </Section>
        </> 
    )
}