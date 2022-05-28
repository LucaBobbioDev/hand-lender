import forum from '../../img/forum.svg'
export default function Forum(){
    return(
        <>
            <h1>
                Fórum
            </h1>
            <p>
                Aqui é possível criar tópicos de discussão relacionados a criação e gerenciamento de projetos de Tecnologia
            </p>
            <img src={forum} width={300}></img>
        </>
    )
}