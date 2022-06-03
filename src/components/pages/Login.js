import {useState} from "react";
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

import Card from "../layout/Card"
import styles from './Login.module.css';
import login from '../../img/login.svg'
import Saudacao from "./Saudacao";

import api from '../../services/api'

export default function Login(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const navigation = useNavigate();

//função assíncrona que efetua o login 
async function goLogin(e){ 
        e.preventDefault();
      let response = await api.post('login.php', { 
             email: email, 
             senha: senha 
           }) 
           .then(function (response) { 
             //Verificando o valor da variavel mensagem enviada pelo php 
             if(response.data == 'Logado com Sucesso!'){ 
                window.alert("Login realizado com sucesso!");
                navigation.navigate('Home');
              }else if(response.data == 'Erro ao logar') 
                window.alert("E-mail ou senha incorreto, tente novamente");
                console.log(response); 
           }) 
           .catch(function (error) { 
             window.alert("Erro ao cadastrar, tente mais tarde!");   
             console.log(error); 
           }); 
      } 
      
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
                            <p>Email</p>
                            <input className={styles.input} type='email' onChange={setEmail}></input>
                            <span className={styles.input_focus} placeholder="Email"></span>
                        </div>

                        <div className={styles.inputArea}>
                            <p>Password</p>
                            <input className={styles.input} type='password' onChange={setSenha}></input>
                            <span className={styles.input_focus} placeholder="Password"></span>
                        </div>
                        
                        <div className={styles.formButton}>
                            <button className={styles.buttonLogin} onClick={goLogin}>Entrar</button>
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