import create from '../../img/create.svg'
import styles from './Create.module.css'
import Section from '../layout/Section'
import ProjectForm from '../project/ProjectForm'

export default function Create(){
    return(
        <>
            <Section>
                <h1>
                    Criação do Projeto
                </h1>
                <p>
                    Área de Criação do Projeto.
                </p>
                <img src={create} width={300} alt='Drawing of a man sculpting a bust'></img>
                <ProjectForm/>
            </Section>
        </>
    )
}