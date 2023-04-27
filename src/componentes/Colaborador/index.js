
import "./Colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart  } from "react-icons/ai"

const Colaborador =(props)=>{
    const {nombre,imagen,video ,descripcion,categoria,id,fav}=props.datos
    const {colorPrimario,eliminarColaborador,like} =props
   

    //condicion ? verdadera: false
   return <div className="colaborador">

    <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)}/>
      <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={imagen} alt={nombre} />
        </div>
         
            <div className="info">
            <h4> {nombre}</h4>  
            <h5>{descripcion}</h5>         
            <a href={video}> {video}</a>
            {fav ? <AiFillHeart color="red" onClick={()=>like(id)}/>:<AiOutlineHeart onClick={()=>like(id)}/>}
            


            
          


        </div>
    </div>
}
export default Colaborador