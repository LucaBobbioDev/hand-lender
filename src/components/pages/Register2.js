import {useState} from "react";
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

import Card from "../layout/Card"
import styles from './Register2.module.css';
import register from "../../img/register.svg"
import Saudacao from "./Saudacao";

import api from '../../services/api'

export default function Register(){

//Criando as variaveis para receber o dados da tela 
let [nome, setNome] = useState(); 
let [email, setEmail] = useState(); 
let [telefone, setTelefone] = useState(); 
let [cnpj, setCnpj] = useState();
let [senha, setSenha] = useState(); 


 const navigation = useNavigate();

//Criando a função assíncrona para cadastrar um usuario no banco de dados 
async function CadastrarUsuario(e){    
    e.preventDefault();   
    let res;
    let response = await api.post('cadastro-investidor.php', { 
                    nome: nome, 
                    email: email, 
                    telefone: telefone,
                    cnpj: cnpj,
                    senha: senha
                }) 
                .then(function (response) { 
                    window.alert("Usuário Cadastrado com sucesso!");               
                    res.send(response.data); 
                    navigation.navigate('Projects');
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
                        <img src={register} width={200} alt="Drawing of man looking at a login page in a giant smartphone"></img>
                    </div>
                    <form className={styles.login}>
                        <div className={styles.inputArea}>
                            <p>Nome completo</p>
                            <input className={styles.input} type='text' onChange={setNome}></input>
                            <span className={styles.input_focus} placeholder="nome"></span>
                        </div>
                        <div className={styles.inputArea}>
                            <p>Email</p>
                            <input className={styles.input} type='email' onChange={setEmail}></input>
                            <span className={styles.input_focus} placeholder="Email"></span>
                        </div>
                        <div className={styles.inputArea}>
                            <p>Telefone</p>
                            <input className={styles.input} type='tel' onChange={setTelefone}></input>
                            <span className={styles.input_focus} placeholder="Telefone"></span>
                        </div>
                        <div className={styles.inputArea}>
                            <p>CNPJ</p>
                            <input className={styles.input} type='text' onChange={setCnpj}></input>
                            <span className={styles.input_focus} placeholder="Cnpj"></span>
                        </div>
                        <div className={styles.inputArea}>
                            <p>Senha</p>
                            <input className={styles.input} type='password' onChange={setSenha}></input>
                            <span className={styles.input_focus} placeholder="Password"></span>
                        </div>
                        <div className={styles.formButton}>
                            <button className={styles.buttonLogin} onClick={CadastrarUsuario}>Criar conta</button>
                        </div>
                        <div className={styles.linkConta}>
                            <span>Já possui uma conta? faça o seu login</span>
                            <span className={styles.link}>
                                <Link to="/Login">aqui</Link>
                            </span> 
                        </div>
                    </form>
                </Card>
            </div> 
        </>
    )
}