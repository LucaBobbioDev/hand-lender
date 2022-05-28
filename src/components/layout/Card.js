//Criando um componente card
import styles from './Card.module.css';

export default props =>
    <div className={styles.card}>
        <div className={styles.conteudo}>
            {props.children}
        </div>
    </div>