import { useState, useEffect } from 'react';
import './Visita_contenido.scss';
import VisitaTabla from './Visita_tabla/Visita_tabla';

import loadingGif from '../../Recursos/img/loading.gif'

export default function VisitaContenido(props) {
    const[hidden, setHidden] = useState(true);
    const [category, setCategory] = useState();
    const [contentEndPoint, setContentEndPoint] = useState();

    function toggleContent() {
        setHidden(!hidden);
    }

    // useEffect(() => {
    //     switch(category) {
    //         case "Cultura":
    //             setContentEndPoint(props.pageEndPoint.map(item => {return null}))
    //     }
    // }, [category])

    if (props.done) {
    // props.pageEndPoint.gastronomia.restaurantes.map(restaurante => {
    //     return console.log(restaurante.name);
    // })


        if(props.hidden) {
            return <></>;
        } else {
            return (
                <div className="visita__content">
                    <div className="visita__content__form">
                        <label>Día: </label>
                        <input type="date" />

                        <label>Categoría: </label>
                        <select value={category} onChange={event => {setCategory(event.target.value)}}>
                            <option>--- Elige ---</option>
                            <option>Cultura</option>
                            <option>Gastronomía</option>
                            <option>Ocio</option>
                        </select>

                        <label>A dónde ir: </label>
                        <select>
                            <option>--- Elige ---</option>
                            {/* {props.pageEndPoint.map(restaurante => {
                                return <option key={restaurante}>{restaurante}</option>
                            })} */}
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
    } else {
        return (
            <img style={{
              width: "70px"
            }} src={loadingGif} alt="Loading..." />
          )
    }
}