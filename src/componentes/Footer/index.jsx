import "./Footer.css"
import imagen from "../../img/facebook.png"
import imagen2 from "../../img/twitter.png"
import imagen3 from "../../img/instagram.png"




const Footer =()=>{
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/'>
                <img src={imagen} alt='Facebook' />
            </a>
            <a href='https://twitter.com/SaMileMora/'>
                <img src={imagen2} alt='twitter' />
            </a>
            <a href='https://www.instagram.com/invites/contact/?i=y3ih28x6yp77&utm_content=39nk545/'>
                <img src={imagen3} alt='instagram' />
            </a>
        </div>
       
        <strong>Desarrollado por Sadra Morales</strong>
    </footer>
}
export default Footer