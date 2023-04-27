import { useState } from "react"
import "./Formulario.css"
import  Campo from "../Campo"
import  ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"


 const Formulario = (props)=>{

   const [nombre,actualizarNombre] = useState("")
   const [descripcion ,actualizarDescripcion] = useState("")
   const [imagen,actualizarImagen] = useState("")
   const [video,actualizarVideo] = useState("")
   const [categoria,actualizarCategoria] = useState("")


   const [titulo,actualizarTitulo]= useState("")
   const [color,actualizarColor]= useState("")

   const {registrarColaborador,crearCategoria} = props



   const manejarEnvio = (e) => {
      e.preventDefault()
      console.log("Manejar el envio")

         let datosAEnviar ={/*esto va a ser igual a ogjeto*/
            nombre,
            descripcion,
            imagen,
            video,
            categoria
        }
        registrarColaborador(datosAEnviar)

        
     
    }
    const manejarNuevaCategoria =(e)=>{
      e.preventDefault()
      crearCategoria({titulo,colorPrimario:color})

    }
     return <section className="formulario">
        <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear un nuevo video.</h2>
        <Campo 
            titulo ="Nombre"
            placeholder="Ingrese nombre de la pelicula" 
            required 
            valor={nombre} 
            actualizarValor={actualizarNombre}
         /> 
       
          
        <Campo 
            titulo ="Imagen"
            placeholder="Ingrese  imagen de video"
            required
            valor={imagen} 
            actualizarValor={actualizarImagen}
         />
         
        <Campo 
            titulo ="Video"
            placeholder="Ingrese enlase de video"
            required
            valor={video} 
            actualizarValor={actualizarVideo}
         />
            <Campo 
            titulo ="Descripcion"
            placeholder="Ingrese descripcion" 
            required
            valor={descripcion} 
            actualizarValor={actualizarDescripcion}
         />     
        <ListaOpciones 
            valor={categoria} 
            actualizarCategoria ={actualizarCategoria} 
            categoria={props.categoria}
                
         />
        
        <Boton >
           Crear Video
        </Boton>
        
        </form>
        <form onSubmit={manejarNuevaCategoria}>
        <h2>Rellena el formulario para crear nueva categoria.</h2>
        <Campo 
            titulo ="Titulo"
            placeholder="Ingrese Titulo" 
            required 
            valor={titulo} 
            actualizarValor={actualizarTitulo}
         /> 
       
          
        <Campo 
           
            titulo ="Color"
            placeholder="Ingresar el color en hex"
            required
            valor={color} 
            actualizarValor={actualizarColor}
            type="color"
         />
           <Boton >
           Crear Categoria
        </Boton>
         </form>
        
        
    </section>


 }
 export default Formulario