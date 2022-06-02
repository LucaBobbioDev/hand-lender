import { useState, useEffect } from "react";

export default function Saudacao(){
    let [saudacao, setSaudacao] = useState();

    //Arrow function que altera a saudação conforme a hora
    useEffect(()=>{
        const currentHour = new Date().getHours();
            if(currentHour < 12){
                setSaudacao("Bom dia!");
            }else if(currentHour >= 12 && currentHour <18) {
                setSaudacao("Boa tarde!");
            }else{
                setSaudacao("Boa noite!");
            }
        },[]);

    return(
        <h2>{saudacao} Seja bem vindo ao Hand Lender.</h2>
    );
}