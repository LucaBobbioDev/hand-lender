import styles from './Submit.module.css'

export default function Submit({text}){
    return(
        <>
            <button className={styles.button}>{text}</button>
        </>
    )
}