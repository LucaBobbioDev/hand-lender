import chat from "../../img/chat.svg"
import Section from "../layout/Section"

export default function Contact(){
    return(
        <>
            <Section>
                <h1>
                    Contato
                </h1>
                <p>
                    Aqui é onde será feito o contato e negociação dos projetos
                </p>
                <img src={chat} width={300} alt="Drawing of a woman with a chat cloud answering another chat cloud"></img>
            </Section>
        </>
    )
}