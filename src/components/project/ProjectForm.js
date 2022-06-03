import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Submit from '../form/Submit'
import { Link } from 'react-router-dom'

export default function ProjectForm (){
    return(
        <div className={styles.background}>
            <form className={styles.form}>
                <Input 
                    type="text"
                    text="Nome do Projeto"
                    name="Name"
                    placeholder="Insira o nome do projeto"
                />
                <Input 
                    type="number"
                    text="Orçamento do Projeto"
                    name="Budget"
                    placeholder="Insira um possível orçamento"
                />
                <Input 
                    type="text"
                    text="Descrição do Projeto"
                    name="Budget"
                    placeholder="Insira uma descrição do seu projeto"
                />
                <div className={styles.buttonLink}>
                    <Link to="/Projects">
                        <Submit text="Publicar Projeto"/>
                    </Link>
                </div>
            </form>
        </div>
        
    )
}