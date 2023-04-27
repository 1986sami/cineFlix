import { useState } from 'react';
import { v4 as uuid } from "uuid"
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiCine from './componentes/MiCine';
import Categoria from './componentes/Categoria';
import Footer from './componentes/Footer';
import { AiOutlineConsoleSql } from 'react-icons/ai';







function App() {
  
  const [mostrarFormulario,/*funcion*/actualizarMostrar]= useState (false)
  const [colaboradores,actualizarColaboradores] =useState([
    {
      id: uuid(),
      categoria:"Comedia",
      descripcion:"Pelicula de una chica que por medio de unos aretes cambian de cuerpos con un hombre",
      imagen:"https://m1.paperblog.com/i/367/3672745/top-5-mejores-peliculas-comedia-L-arcVEL.jpeg",
      nombre:"Este cuerpo no es mio",
      video:"https://youtu.be/EVb2-8Kal9c"
  
    } ,{
      id: uuid(),
    categoria:"Drama",
    descripcion:"historia de amor entre una humana y un vampiro",
    imagen:"https://tse3.mm.bing.net/th?id=OIP.AF6L_jCP7ts6fDPzrb8opwHaLH&pid=Api&P=0",
    nombre:"crepusculo",
    video:"https://youtu.be/fFIn8pjZtsk"

  } ,
  {
    id: uuid(),
    categoria:"Terror",
    descripcion:"pelicula de una mujer que revive su cumpleaños",
    imagen:"https://tse3.mm.bing.net/th?id=OIP.unKF43e_G1Z5f-Hirwh1EQHaKl&pid=Api&P=0",
    nombre:"feliz dia de su muerte",
    video:"https://youtu.be/QF7HDUI0N2M"

  },
  {
    id: uuid(),
    categoria:"Comedia",
    descripcion:"Niña con poderes",
    imagen:"https://tse2.mm.bing.net/th?id=OIP.ao0uBW_lVM3WJEcowQunUgHaLH&pid=Api&P=0",
    nombre:"matilda",
    video:"https://youtu.be/QF7HDUI0N2M"

  },
  {
    id: uuid(),
    categoria:"Accion",
    descripcion:"historia de amor entre una humana y un vampiro",
    imagen:"https://tse3.mm.bing.net/th?id=OIP.AF6L_jCP7ts6fDPzrb8opwHaLH&pid=Api&P=0",
    nombre:"crepusculo",
    video:"https://youtu.be/fFIn8pjZtsk"

  },
  {
    id: uuid(),
    categoria:"Infantil",
    descripcion:"peliculas para niños",
    imagen:"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2017/10/frozen.jpg?itok=Pp3IPP9q",
    nombre:"crepusculo",
    video:"https://youtu.be/1K00IBBsXtw"

  },

])//trabajar arreglo vacio cuando vamos a insetar datos
 

const [categoria,actualizarCategoria]= useState([
  {
    id: uuid(),
    titulo:"Accion",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8",
    fav:true
    
  },
  {
    id: uuid(),
    titulo:"Infantil",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5",
    fav:true
  },
  {
      id: uuid(),
      titulo:"Terror",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9",
      fav:true
  }
  ,
  { 
    id: uuid(),
    titulo:"Drama",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF",
    fav:false
  },
  {
    id: uuid(),
    titulo: "Comedia",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E2",
    fav:false
  }
  



]
)



  //Ternario --> condicion ? si es verdadera se muestra:nosemuestra
  //para que se desaparezca el formulario
 // condicion && seMuestra

  const cambiarMostrar =()=>{
    actualizarMostrar(!mostrarFormulario)

}
//registrar  colaborador
 const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
}

   //Eliminar colaborador
   const eliminarColaborador=(id) => {
   
    console.log("El id eliminado es: ",id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => {//si filter nos cambia e l arreglo nos devuelve otro
      return colaborador.id !== id
    
    });
    actualizarColaboradores(nuevosColaboradores)
  }

 //Actualizar color de fondo

 const actualizarColor=(color,id)=>{//actualiza color de fondo
    console.log("actualizar: " ,color,id)
    const categoriaActualizada= categoria.map((categoria)=>{
        if(categoria.id === id){
          categoria.colorPrimario= color
        }
        return categoria
    })
    actualizarCategoria(categoriaActualizada)
 }
 //Crear categoria
  const crearCategoria =(nuevaCategoria)=>{
    console.log(nuevaCategoria)
    actualizarCategoria([...categoria,{...nuevaCategoria,id:uuid()}])

  }
  const like = (id) =>{
    console.log("like",id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }
  return (
    <div >    
    <Header/>
    {/*mostrarFormulario === true ?  <Formulario/> : <></>*/}       
    
    {
    mostrarFormulario && <Formulario 
      categoria={categoria.map((categoria )=> categoria.titulo)} /*tambien se puede asi*/
      registrarColaborador={ registrarColaborador }
      crearCategoria={crearCategoria}
  
      />  

    }
    
    
    <MiCine  cambiarMostrar={cambiarMostrar }/>  

    {
      categoria.map((categoria)=> <Categoria
       datos={categoria}
       key={categoria.titulo}
       colaboradores={colaboradores.filter(colaborador=> colaborador.categoria === categoria.titulo)}//acomoda la foto en cada lugar que corresponde
       eliminarColaborador={eliminarColaborador}//nueva props
       actualizarColor={actualizarColor}
       like={like}
       /> 
       
       )
    }
    <Footer/>      
  </div>
  );
}

export default App;
