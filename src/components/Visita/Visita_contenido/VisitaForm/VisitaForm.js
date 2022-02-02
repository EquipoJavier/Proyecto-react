import { useState } from "react";
export default function VisitaForm(props) {
    const dropdown = props.categoryElements;

    return (
        <div className="visita__content__form">
            <label>Día: </label>
                <input type="date" />

                <label>Categoría: </label>
                <select onChange={event => {props.dispatch({type:event.target.value})}}>
                    <option style={{display:"none"}}>--- Elige ---</option>
                    <option>Cultura</option>
                    <option>Gastronomía</option>
                    <option>Ocio</option>
                </select>


                <label>A dónde ir: </label>
                <select>
                    <option style={{display:"none"}}>--- Elige ---</option>
                    {dropdown.map(element => {
                        return <option key={element}>{element}</option>
                    })}
                </select>

                <button className="visita__content__form--submit" onClick={() => {
                    props.toggleContent();
                }}>
                    Añadir itinerario
                </button> 
        </div>
    )
}