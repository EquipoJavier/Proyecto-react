import { useState } from 'react';
import './Visita_contenido.scss';
import VisitaTabla from './Visita_tabla/Visita_tabla';

export default function VisitaContenido(props) {
    const[hidden, setHidden] = useState(true);

    function toggleContent() {
        setHidden(!hidden);
    }
    
    if(props.hidden) {
        return null;
    } else {
        return (
            <div className="visita__content">
                <div className="visita__content__form">
                    <label>Día: </label>
                    <input type="date" />

                    <label>Categoría: </label>
                    <select>
                        <option>--- Elige ---</option>
                        <option>Cultura</option>
                        <option>Gastronomía</option>
                        <option>Ocio</option>
                        <option>Transporte</option>
                    </select>

                    <label>A dónde ir: </label>
                    <select>
                        <option>--- Elige ---</option>
                        <option>Opción 1</option>
                        <option>Opción 2</option>
                        <option>Opción 3</option>
                        <option>Opción 4</option>
                    </select>

                    <button className="visita__content__form--submit" onClick={() => {
                        toggleContent();
                    }}>
                        Añadir itinerario
                    </button>
                </div>

                <VisitaTabla hidden={hidden}/>
            </div>
        );
    }
}