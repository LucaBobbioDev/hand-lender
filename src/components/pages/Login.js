import Card from "../layout/Card"
import styles from './Login.module.css';
import login from '../../img/login.svg'

export default function Login(){
    return(
        <>
            <div className={styles.area}>
                <Card>
                    Bem vindo!
                    <div>
                        <input type="email" placeholder="Insira o seu email"/>
                        <input type="password" placeholder="Insira a sua senha"/>
                        <input type="submit"/>
                    </div>
                </Card>
                <img src={login} width={300}></img>
            </div>
        </>
    )
}