import styles from './Container.module.css';

export default function Container(props){
    return(
        <div className={`${styles.Container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}