import styles from './LandingPage.module.css'
import LinkButton from './LinkButton';

export default function LandingPage(){
    return(
        <div className={styles.interface}>
            <p className={styles.text}>
            Tem uma ideia para um projeto de tecnologia, mas não sabe onde divulga-lo ou onde encontrar possíveis investidores? <br/>
                Saiba que o Hand Lender é o lugar perfeito para resolver o seu problema!<br/>
            </p>
            <div className={styles.center}>
                <LinkButton to="/Register" text="Login"/>
            </div>
        </div>
        
    )
}