import { useState } from 'react';
import './Button.scss';
/*
Props que hay que pasarle al botón (tienen que pasarse con estos nombres):
    url: el enlace que se va a abrir
    title: el texto que saldrá en el botón
    colorFT: al hacer hover, nuevo color de fuente del texto (OPCIONAL)
    colorBG: al hacer hover, nuevo color de fondo del botón (OPCIONAL)
*/
export default function Button(props) {
    /*
    Al poner el ratón sobre el botón (el evento onMouseEnter) y quitarlo (onMouseLeave), se llama a toggleHover.
    Esa función cambia el estado de la variable "hovered" (verdadero --> falso y viceversa).
    Cuando "hovered" sea verdadero, aplica los nuevos colores de fondo y de fuente.
    */
    const [hovered, setHovered] = useState(false);

    function toggleHover() {
        setHovered(!hovered);
    }

    let hoverStyle;
    if(hovered) {
        hoverStyle = {
            backgroundColor: props.colorBG || "inherit" ,
            color: props.colorFT || "inherit"
        }
    }
    return (
        <a href={props.url} className="button" style={hoverStyle} onMouseEnter={toggleHover} onMouseLeave={toggleHover} target="_blank" rel="noreferrer">
            {props.title}
        </a>
    )
}