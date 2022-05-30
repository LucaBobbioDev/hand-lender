import Card from "../layout/Card"
import styles from './Register.module.css';
import register from "../../img/register.svg"
import Section from "../layout/Section"

export default function Register(){
    return(
        <>
            <div className={styles.area}>
                <Card>
                    <div>
                        <p>
                            Seja bem-vindo! <br/>
                            Preencha todos os campos abaixo para se registrar no Hand Lender.
                        </p>
                    </div>
                    <Section>
                        <div className={styles.input}>
                            <input type="text" placeholder="Insira o seu nome"/>
                        </div>
                        <div className={styles.input}>
                            <input type="email" placeholder="Insira o seu email"/> 
                        </div>
                        <div className={styles.input}>
                            <input type="tel" placeholder="Insira o seu número de telefone"/> 
                        </div>
                        <div className={styles.input}>
                            <input type="password" placeholder="Insira a sua senha"/> 
                        </div>
                        <div className={styles.input}>
                            <input type="submit" value="Criar conta"/>
                        </div>
                    </Section>
                </Card>
                <img src={register} width={300} alt="Drawing of man looking at a login page in a giant smartphone"></img>
            </div>
        </>
    )
}