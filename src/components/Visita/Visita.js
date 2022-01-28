import { useState } from 'react';
import Button from '../Button/Button';
import './Visita.scss';
import VisitaContenido from './Visita_contenido/Visita_contenido';

export default function Visita() {
    const [hidden, setHidden] = useState(true);

    function toggleContent() {
        setHidden(!hidden);
    }

    return (
        <div className="visita__body">
            <div className="visita__box">
                <div className="visita__addButton">
                    <Button title="Añadir elemento al itinerario" hoverClass="violet" onClick={() => {
                        toggleContent();
                    }} />
                </div>
                <VisitaContenido hidden={hidden}/>
            </div>
        </div>
    );
}