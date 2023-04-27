import { useState } from "react"

import "./Campo.css"

const Campo=(props)=>{/*como fuction*/
    const placeholderModificado = `${props.placeholder}...`

    //destructuracion
    const {type="text"} = props
   

    const manejarCambio =(e)=>{        
        props.actualizarValor(e.target.value)/*actualiza el valor*/
    }
    return <div className={`campo campo-${type}`}>
        <label> {props.titulo}</label>
        <input 
            placeholder= {placeholderModificado} 
            required ={props.required} 
            value={props.valor}
            onChange ={manejarCambio}
            type={type}
           
            
        />

    
    
    </div>

}
export default Campo