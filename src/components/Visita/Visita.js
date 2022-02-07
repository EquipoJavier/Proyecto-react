import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Button from '../Button/Button';
import './Visita.scss';
import VisitaContenido from './Visita_contenido/Visita_contenido';

import loadingGif from '../Recursos/img/loading.gif'

export default function Visita() {
    const [hidden, setHidden] = useState(true);
    const [done , pageEndPoint, addPlan] = useOutletContext();

    function toggleContent() {
        // setHidden(!hidden);
        setHidden(false);
    }

    if (done) {
        return (
            <div className="visita__body">
                <div className="visita__box">
                    <div className="visita__addButton">
                        <Button title="Añadir elemento al itinerario" hoverClass="violet" onClick={() => {
                            toggleContent();
                        }} />
                    </div>
                    <VisitaContenido hidden={hidden} done={done} pageEndPoint={pageEndPoint} addPlan={addPlan}/>
                </div>
            </div>
        );
    } else {
        return (
            <img style={{
              width: "70px",
              marginRight: "auto",
              marginLeft: "auto",
            }} src={loadingGif} alt="Loading..." />
        )
    }
}