import { useState, useEffect, useRef } from "react";
import Persona1 from "../Recursos/img/persona1-modified.png";
import Persona2 from "../Recursos/img/persona2-modified.png";
import Persona3 from "../Recursos/img/persona3-modified.png";
import Persona4 from "../Recursos/img/persona4-modified.png";
import Persona5 from "../Recursos/img/persona5-modified.png";
import Persona6 from "../Recursos/img/persona6-modified.png";
import Persona7 from "../Recursos/img/persona7-modified.png";
import Persona8 from "../Recursos/img/persona8-modified.png";
import Persona9 from "../Recursos/img/persona9-modified.png";
import Persona10 from "../Recursos/img/persona10-modified.png";

const initialFotos = [
    {
        'nombre': Persona1,
        'texto': 'Marisa Sanchez',
        'opinion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla congue, luctus est vestibulum, varius nunc. Ut elementum sollicitudin lorem, ut venenatis dui. Nunc viverra augue nulla, at mattis ipsum dignissim sed.',
        'id':'p1',
    },
    {
        'nombre': Persona2,
        'texto': 'Candela López',
        'opinion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla congue, luctus est vestibulum, varius nunc. Ut elementum sollicitudin lorem, ut venenatis dui. Nunc viverra augue nulla, at mattis ipsum dignissim sed.',
        'id':'p2'
    },
    {
        'nombre': Persona3,
        'texto': 'Jose Luis García',
        'opinion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla congue, luctus est vestibulum, varius nunc. Ut elementum sollicitudin lorem, ut venenatis dui. Nunc viverra augue nulla, at mattis ipsum dignissim sed.',
        'id':'p3'
    },
    {
        'nombre': Persona4,
        'texto': 'Paco Gonzalez',
        'opinion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla congue, luctus est vestibulum, varius nunc. Ut elementum sollicitudin lorem, ut venenatis dui. Nunc viverra augue nulla, at mattis ipsum dignissim sed.',
        'id':'p4'
    },
    {
    'nombre': Persona5,
    'texto': 'Luis Zurdo',
    'opinion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla congue, luctus est vestibulum, varius nunc. Ut elementum sollicitudin lorem, ut venenatis dui. Nunc viverra augue nulla, at mattis ipsum dignissim sed.',
    'id':'p5'
    },
    {
        'nombre': Persona6,
        'texto': 'Rosario Fenol',
        'opinion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla congue, luctus est vestibulum, varius nunc. Ut elementum sollicitudin lorem, ut venenatis dui. Nunc viverra augue nulla, at mattis ipsum dignissim sed.',
        'id':'p6'
    },
    {
        'nombre': Persona7,
        'texto': 'Paula Cabreras',
        'opinion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla congue, luctus est vestibulum, varius nunc. Ut elementum sollicitudin lorem, ut venenatis dui. Nunc viverra augue nulla, at mattis ipsum dignissim sed.',
        'id':'p7'
    },
    {
        'nombre': Persona8,
        'texto': 'Alba Tallón',
        'opinion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla congue, luctus est vestibulum, varius nunc. Ut elementum sollicitudin lorem, ut venenatis dui. Nunc viverra augue nulla, at mattis ipsum dignissim sed.',
        'id':'p8'
    },
    {
        'nombre': Persona9,
        'texto': 'Guillermo Colorado',
        'opinion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla congue, luctus est vestibulum, varius nunc. Ut elementum sollicitudin lorem, ut venenatis dui. Nunc viverra augue nulla, at mattis ipsum dignissim sed.',
        'id':'p9'
    },
    {
        'nombre': Persona10,
        'texto': 'Angel Ruiz',
        'opinion': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget nulla congue, luctus est vestibulum, varius nunc. Ut elementum sollicitudin lorem, ut venenatis dui. Nunc viverra augue nulla, at mattis ipsum dignissim sed.',
        'id':'p10'
    }
    ]


    


export default function Carrusel() {
    const [fotos, setFotos] = useState(initialFotos);
    const [botonPulsado, setBotonPulsado] = useState(false);
    const [translateX, setTranslateX] = useState(0); 
    const [activoDrch, setActivoDrch] = useState(false);
    const [activoIzq, setActivoIzq] = useState(false);

    const slider = useRef(null);

    function CarruselBtnDrch(){
        slider.current.style.transition = '2s ease all';     
        slider.current.style.transform = `translateX(${translateX+32.5}%)`; 
        setBotonPulsado(false);
        console.log(">>>>>1",translateX+32.5)      
        setTranslateX(translateX+32.5);
        setActivoDrch(true);
    }

    function CarruselBtnIzq(){
        
        slider.current.style.transition = '2s ease all';     
        slider.current.style.transform = `translateX(${translateX-32.5}%)`; 
        setBotonPulsado(true);      
        setTranslateX(translateX-32.5);
        setActivoIzq(true);
    }

    function CarruselTransitionEnd(){
        
        if(botonPulsado){
            slider.current.style.transition = 'none'; 
            slider.current.style.transform = `translateX(${translateX+32.5}%)`; 
            setTranslateX(0);
        }else{
            slider.current.style.transition = 'none'; 
            slider.current.style.transform = `translateX(${translateX-32.5}%)`;
            console.log(">>>>>2",translateX-32.5) 
            setTranslateX(0);
            console.log("derecho");
        }
  
            rotate(botonPulsado);
            setActivoDrch(false);
            setActivoIzq(false);        
    }

    function rotate(isLeft = false) {        
        if (isLeft) {
            setFotos([...fotos.slice(1, fotos.length), fotos[0]]);
        } else {
            setFotos([fotos[fotos.length-1], ...fotos.slice(0, fotos.length-1)]);
        }
    }

    useEffect(() => {
        const id = setTimeout(() => {
            slider.current.style.transition = '2s ease all';     
            slider.current.style.transform = `translateX(${translateX+32.5}%)`; 
            setBotonPulsado(false);      
            setTranslateX(translateX+32.5);
        },5000)
        return () => {
            clearTimeout(id)
        } }, [fotos]);

        return(
            <>
            <button className="boton_carrusel boton_carrusel--izq" disabled={activoIzq} onClick={()=>CarruselBtnIzq()}>&#60;</button>
            <button className="boton_carrusel boton_carrusel--drch" disabled={activoDrch} onClick={()=>CarruselBtnDrch()}>&#62;</button>
                <div className="carrusel--container_exterior">
                    <div className="opiniones_carrusel--container" style={{transform: "translateX(0%)"}} ref={slider} onTransitionEnd={()=>CarruselTransitionEnd()}>
                            {
                                fotos.slice(0,5).map((props)=>
                                    <div className="opiniones_contenido" key={props.id}>

                                        <div className="imagenes--container">
                                            <img src={props.nombre} className="carrusel_imagen"></img>
                                        </div>
                                        <div className="opinion_texto">
                                            <h3>{props.texto}</h3>
                                            <p>{props.opinion}</p>
                                        </div>
                                    </div>
                                )
                            }
                    </div>
                </div>
            </>
        )
}