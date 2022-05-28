import Card from "../layout/Card"
import styles from './Login.module.css';
import login from '../../img/login.svg'
import Section from '../layout/Section'

export default function Login(){
    return(
        <>
            <Section>
                <div className={styles.area}>
                    <Card>
                        <div className={styles.conteudo}>
                            <h3>Bem Vindo!</h3>
                            <div className={styles.input}>
                                <input type="email" placeholder="Insira o seu email"/>
                            </div>
                            <div className={styles.input}>
                                <input type="password" placeholder="Insira a sua senha"/>
                            </div>
                            <div className={styles.input}>
                                <input type="submit"/>
                            </div>
                        </div>
                    </Card>
                    <img src={login} width={300} alt='Drawing of a man opening a door'></img>
                </div>
            </Section>
        </>
    )
}