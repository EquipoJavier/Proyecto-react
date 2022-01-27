import { useState } from 'react';
import './Button.scss';
/*
Props que hay que pasarle al botón (tienen que pasarse con estos nombres):
    url: el enlace que se va a abrir
    title: el texto que saldrá en el botón
    hoverClass: los estilos que se añadirán al hacer hover sobre el botón (ver Button.scss)
*/
export default function Button(props) {
    /*
    Al poner el ratón sobre el botón (el evento onMouseEnter) y quitarlo (onMouseLeave), se llama a toggleHover.
    Esa función cambia el estado de la variable "hovered" (verdadero --> falso y viceversa).
    Cuando "hovered" sea verdadero, aplica la clase pasada como propiedad en "hoverClass" y cuando sea falso, la quita.
    */
    const [hovered, setHovered] = useState(false);

    function toggleHover() {
        setHovered(!hovered);
    }
    
    const cssClass = "button " + (hovered ? props.hoverClass : "" );

    return (
        // <a href={props.url} className={cssClass} style={hoverStyle} onMouseEnter={toggleHover} onMouseLeave={toggleHover} target="_blank" rel="noreferrer">
        <a href={props.url} className={cssClass} onMouseEnter={toggleHover} onMouseLeave={toggleHover} target="_blank" rel="noreferrer">
            {props.title}
        </a>
    )
}