import Card from "../layout/Card"
import styles from './Register1.module.css';
import register from "../../img/register.svg"
import Saudacao from "./Saudacao";

export default function Register(){
    return(
        <>
            <div className={styles.content}>
                <Card>
                    <div>
                    <Saudacao />  
                    </div>
                </Card>
                <div>
                    <img src={register} width={300} alt="Drawing of man looking at a login page in a giant smartphone"></img>
                </div>
            </div> 
        </>
    )
}