import styles from './Input.module.css'

export default function Input ({type, text, name, placeholder, handleOnChange, value}){
    return(
        <div className={styles.form_control}>
            <label className={styles.form_label} htmlFor={name}>{text}:</label>
            <input className={styles.form_input}
            type={type} 
            name={name} 
            id={name} 
            placeholder={placeholder} 
            onChange={handleOnChange}
            value={value}
            />
        </div>
    )
}