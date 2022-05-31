import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Submit from '../form/Submit'

export default function ProjectForm (){
    return(
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
            <Submit text="Criar Projeto"/>
        </form>
    )
}