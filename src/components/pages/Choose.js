import LinkButton from '../layout/LinkButton';

import idealizador from '../../img/idealizador.svg'
import investidor from '../../img/investidor.svg'

import styles from './Choose.module.css'

export default function Choose(){
    return(
        <>
        <div className={styles.background}>
            <p className={styles.text}>
                Antes de fazer a sua conta no Hand Lender é necessário escolher que tipo de usuário você será na plataforma
                <br/> <br/>
                <strong>Faça a sua escolha:</strong>
            </p>
            <div className={styles.center}>
                <div className={styles.idea}>
                    <img src={idealizador} width={300} alt='Drawing of a man looking at different notes floating in the air'></img>
                    <div className={styles.button}><LinkButton to="/Register1" text="Serei um Idealizador"/></div>
                </div>
                <div className={styles.inve}>
                    <img src={investidor} width={300} alt='Drawing of a man looking at column charts'></img>
                    <div className={styles.button}><LinkButton to="/Register2" text="Serei um Investidor"/></div>
                </div>
            </div>
        </div>
        </>
    )
}