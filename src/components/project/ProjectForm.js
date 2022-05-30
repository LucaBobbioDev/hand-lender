import styles from './ProjectForm.module.css'

export default function ProjectForm (){
    return(
        <form className={styles.form}>
            <div>
                <input type='text' placeholder="Insira o nome do seu projeto"/>
            </div>
            <div>
                <input type='number' placeholder="Insira um possível orçamento"/>
            </div>
            <div>
                <input type="submit" value="Criar Projeto"/>
            </div>
        </form>
    )
}