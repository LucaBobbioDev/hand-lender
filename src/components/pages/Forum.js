import forum from '../../img/forum.svg'
import Section from '../layout/Section'

export default function Forum(){
    return(
        <>
            <Section>
                <h1>
                    Fórum
                </h1>
                <p>
                    Aqui é possível criar tópicos de discussão relacionados a criação e gerenciamento de projetos de Tecnologia
                </p>
                <img src={forum} width={300} alt='Drawing of a woman carrying a board while walking into another board'></img>
            </Section>
        </>
    )
}