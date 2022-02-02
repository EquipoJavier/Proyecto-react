import { useState, useReducer } from 'react';
import './Visita_contenido.scss';
import VisitaTabla from './Visita_tabla/Visita_tabla';
import VisitaForm from './VisitaForm/VisitaForm';

import loadingGif from '../../Recursos/img/loading.gif'

export default function VisitaContenido(props) {
    const [hidden, setHidden] = useState(true);
    const endpoint = props.pageEndPoint;

    const initialCategoryState = {
        selectedCategory: false,
        category: "",
        categoryElements: []
    }

    const categoryReducer = (state, action) => {
        switch (action.type) {
            case "Gastronomía":
                return {
                    selectedCategory: true,
                    category: "gastronomia",
                    categoryElements: endpoint.gastronomia.restaurantes.map(restaurante => {
                        return restaurante.name;
                    })
                }

            // Cultura y ocio son temporales, esto es un ejemplo a falta de datos.
            // Pero la idea es la misma que en gastronomía: un map para recoger los NOMBRES de museos/parques/etc
            case "Cultura":
                return {
                    selectedCategory: true,
                    category: "cultura",
                    categoryElements: endpoint.cultura.first.map(element => {
                        return element.name;
                    })
                }
            case "Ocio":
                return {
                    selectedCategory: true,
                    category: "ocio",
                    categoryElements: endpoint.ocio.first.map(element => {
                        return element.name;
                    })
                }
            default:
                return {initialCategoryState}
        }
    } 

    const [categoryState, categoryDispatch] = useReducer(
        categoryReducer,
        initialCategoryState
    );

    function toggleContent() {
        setHidden(!hidden);
    }
    
    /////////////////////////////////
    // COMPONENT RENDER

    if (props.done) {
        if(props.hidden) {
            return null;
        } else {
            return (
                <div className="visita__content">
                    <VisitaForm toggleContent={toggleContent} dispatch={categoryDispatch} categoryElements={categoryState.categoryElements}/>
                    
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