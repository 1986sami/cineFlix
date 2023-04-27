import "./ListaOpciones.css"

const ListaOpciones =(props) =>{
    /*Metodo map ->arreglo.map((equipo,index)=> {
        return <option>  </option>
        
    })*/
  
    const manejarCambio =(e)=>{
        console.log("cambio",e.target.value)
        props.actualizarCategoria(e.target.value)
      
    }
    

    return  <div className="lista-opciones"> 
        <label>Categorias</label>
        <select value={props.valor}  onChange = {manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar categoria</option>          
            {props.categoria.map((categoria, index) => <option key={index} >{categoria}</option>)}
                  
        </select>

    </div>         
}

export default ListaOpciones
