import { useState } from "react";
export default function VisitaForm(props) {
    const dispatch = props.dispatch;
    const dropdown = props.categoryElements;
    console.log(dropdown, "DROPDOWN");

    return (
        <div className="visita__content__form">
            <label>Día: </label>
                <input type="date" />

                <label>Categoría: </label>
                <select onChange={event => {dispatch({type:event.target.value})}}>
                    <option style={{display:"none"}}>--- Elige ---</option>
                    <option>Cultura</option>
                    <option>Gastronomía</option>
                    <option>Ocio</option>
                </select>


                <label>Qué hacer: </label>
                <select>
                    <option style={{display:"none"}}>--- Elige ---</option>
                    {/* {dropdown.map(element => {
                        return <option key={element}>{element}</option>
                    })} */}
                </select>

                <button className="visita__content__form--submit" onClick={() => {
                    dispatch({type:"Submit"})
                }}>
                    Añadir itinerario
                </button> 
        </div>
    )
}