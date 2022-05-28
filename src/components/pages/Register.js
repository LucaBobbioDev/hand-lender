import Card from "../layout/Card"
import styles from './Register.module.css';
import register from "../../img/register.svg"

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
                    <div>
                        <input type="text" placeholder="Insira o seu nome"/> 
                        <input type="email" placeholder="Insira o seu email"/> 
                        <input type="tel" placeholder="Insira o seu número de telefone"/> 
                        <input type="password" placeholder="Insira a sua senha"/> 
                        <input type="submit"/>
                    </div>
                </Card>
                <img src={register} width={300}></img>
            </div>
        </>
    )
}