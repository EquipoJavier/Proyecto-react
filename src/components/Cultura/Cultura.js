import Boton from "./Boton";
import Tarjetas from "./Tarjetas";
import TitulosSecundarios  from "./TitulosSecundarios";
import ImagenParque from "./ImagenesParques";
import ImagenOtrasVisitas from "./ImagenesOtrasVisitas";
import Reloj from "./Reloj";
import BotonScroll from "./ScrollBoton";
import RelojAnalogico from "./RelojAnalogico";
import Video from "./Video";
import PopUp from "./PopUp";
import Carrusel from "./Carrusel";
import PopUpInfoParques from "./PopUpInfoParques";
import { useState } from "react";

export default function Cultura() {

const [botonPopUp, setBotonPopUp] = useState(false);

const [botonCierrePopUp, setBotonCierrePopUp] = useState(true);

function BotonPulsado(){
  if(botonPopUp===false){
    setBotonPopUp(true);
    setBotonCierrePopUp(false);
  }else{
    setBotonPopUp(false);
    setBotonCierrePopUp(true);
  }
}

function EstilosBotonCierrePopUp() {
  if(botonCierrePopUp){
    return "none"
  }else{
    return "inline"
  }
}
  
   return(
    <div style={{position:"relative"}}>
      <div style={{backgroundColor:"rgba(0,0,0,.8)", zIndex:"30", position:"absolute", width:"100%", height:"564vH", display:EstilosBotonCierrePopUp()}}>
      </div>
       <header>
        <RelojAnalogico/>
        <Reloj/>
      </header>
    
      <aside></aside>
      
      <main>  
        
        <section className="museos">
          <div className="museos--text-box">
            <TitulosSecundarios clase="museos_heading--primary" tituloSecundario="Museos Que Visitar"/>
          </div>
          <div className="cultura-museo__container">
            <Tarjetas />
          </div>
          <Boton boton="Entradas Museos" claseBoton="museos--button" url="https:ww.museosenmadrid.com/entradas-museos-madrid.html"/>
        </section>
        
        <section className="parques">
          <Video/>
          <div className="parques--text-box">
            <TitulosSecundarios clase="parques_heading--primary" tituloSecundario="Parques Que Visitar" />
          </div>
          <ImagenParque/>
          <Boton boton={"Rutas Organizadas"} claseBoton="parques--button" onClick={()=>BotonPulsado()}/>
        </section>
        
        <div style={{display:EstilosBotonCierrePopUp(),position:"fixed",zIndex:"32",width:"50%", height:"75%", backgroundColor:"white", position:"fixed", marginTop:"-450vH", left:"25%", bottom:"13%",  borderRadius: "20px 0px 0px 20px",padding:"3rem", paddingTop:"4rem", overflowY:"scroll"}}>
          <PopUp Componente={PopUpInfoParques}/>
          <button className="boton-PopUp_Cierre" onClick={()=>BotonPulsado()}>X</button>
        </div>
        
        <section className="cultura-otras_visitas">
          <div className="cultura-otras_visitas--text-box">
            <TitulosSecundarios clase="cultura-otras_visitas_heading--primary" tituloSecundario={"Otras Visitas Obligatorias"} />
          </div>
          <ImagenOtrasVisitas/>
          <Boton boton={"Ofertas Tours De Madrid"} claseBoton="cultura-otras_visitas--button" onClick={()=>BotonPulsado()}/>
        </section>         
      
      </main> 
      
      <div style={{display:EstilosBotonCierrePopUp(),position:"fixed",zIndex:"32",width:"50%", height:"75%", backgroundColor:"white", position:"fixed", marginTop:"-450vH", left:"25%", bottom:"13%",  borderRadius: "20px 0px 0px 20px",padding:"3rem", paddingTop:"4rem", overflowY:"scroll"}}>
        <PopUp/>
        <button className="boton-PopUp_Cierre" onClick={()=>BotonPulsado()}>X</button>
      </div>
      <BotonScroll/>
        <section className="opiniones">
          <div className="opiniones--text-box">
            <TitulosSecundarios clase="opiniones_heading--primary" tituloSecundario="Opiniones" />
          </div>
          
          <Carrusel/>
        </section>
      <footer></footer>
    </div>
  )
}




