import { useState } from "react";
import "./MiCine.css"
import imagen from "../../img/add.png";

const MiCine =(props)=>{
    //Setdo-hooks
    //useState    
     // const[nombreVariable,funcionActualiza]= useState(valorInicial)
    //const [nombre,actualizarNombre]= useState ("sandra")//estados
    
    
    //const [mostrar,actualizarMostrar]= useState (true)

    //para que se desaparezca el formulario
    /*const manejarClick =()=>{
        console.log("Mostrar/Ocultar elemento",!mostrar)
        actualizarMostrar(!mostrar)
    }*/
    //vinculamos la imagen con el click con onClick

    return <section className="cineSection">
        <h3 className="title"> Mis Categorias </h3>
        <img src={imagen} alt="add"  onClick={props.cambiarMostrar}></img>
        
    </section>
    

}
export default MiCine