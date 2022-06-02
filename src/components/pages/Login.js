import { useState} from "react";
import {Link} from 'react-router-dom'

import Card from "../layout/Card"
import styles from './Login.module.css';
import login from '../../img/login.svg'
import Saudacao from "./Saudacao";


export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <>
            <div className={styles.content}>
                <Card>
                    <Saudacao />
                    <div className={styles.img}>
                        <img src={login} width={300} alt='Drawing of a man opening a door'></img>
                    </div>
                    <form className={styles.login}>
                        <div className={styles.inputArea}>
                            <input className={styles.input} type='email'></input>
                            <span className={styles.input_focus} data-placeholder="Email"></span>
                        </div>

                        <div className={styles.inputArea}>
                            <input className={styles.input} type='password'></input>
                            <span className={styles.input_focus} data-placeholder="Password"></span>
                        </div>
                        
                        <div className={styles.formButton}>
                            <button className={styles.buttonLogin}>Entrar</button>
                        </div>
                        <div className={styles.linkConta}>
                            <span>Ainda não possui uma conta? Crie sua conta</span>
                            <span className={styles.link}>
                                <Link to="/Choose">aqui</Link>
                            </span> 
                        </div>
                    </form>    
                </Card>
            </div> 
        </>
    );
}