import { useState, useEffect } from 'react';
import './Visita_contenido.scss';
import VisitaTabla from './Visita_tabla/Visita_tabla';
import VisitaForm from './VisitaForm/VisitaForm';

import loadingGif from '../../Recursos/img/loading.gif'

export default function VisitaContenido(props) {
    const[hidden, setHidden] = useState(true);
    const [category, setCategory] = useState();
    const [contentEndPoint, setContentEndPoint] = useState([]);

    function toggleContent() {
        setHidden(!hidden);
    }
    useEffect(() => {
        switch(category) {
            case "Gastronomía":
                setContentEndPoint(props.pageEndPoint.gastronomia.restaurantes.map(restaurante => {
                    console.log(restaurante.name);
                    return restaurante.name;
                }))
            break;
            default:
                setContentEndPoint([]);
            // case "Cultura":
            //     setContentEndPoint(props.pageEndPoint.cultura.first.map(museo => {
            //         return console.log(restaurante.name);
            //     }))
        }
    }, [category])


    if (props.done) {
        if(props.hidden) {
            return null;
        } else {
            return (
                <div className="visita__content">
                    <div className="visita__content__form">
                        <VisitaForm />


                        {/* /////////////////// */}
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
                        </button> */}
                    </div>

                    <VisitaTabla hidden={hidden}/>
                </div>
            );
        }
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