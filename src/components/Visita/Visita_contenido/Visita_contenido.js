import { useState, useReducer } from 'react';
import './Visita_contenido.scss';
import VisitaTabla from './Visita_tabla/Visita_tabla';
import VisitaForm from './VisitaForm/VisitaForm';

export default function VisitaContenido(props) {
    const [pageInfoEndpoint, planningEndpoint] = props.pageEndPoint;
    const addPlan = props.addPlan;

    const [hidden, setHidden] = useState(true);
    const [newPlan, setNewPlan] = useState({
        day: "",
        category: "",
        option: ""
    });

    const initialCategoryState = {
        selectedCategory: false,
        showPlanning: false,
        category: "",
        dropdown: []
    }

    const categoryReducer = (state, action) => {
        switch (action.type) {
            case "Gastronomía":
                return {
                    ...state,
                    selectedCategory: true,
                    category: "gastronomia",
                    dropdown: pageInfoEndpoint.gastronomia.restaurantes.map(restaurante => {
                        return restaurante.name;
                    })
                }

            // Cultura y ocio son temporales, esto es un ejemplo a falta de datos.
            // Pero la idea es la misma que en gastronomía: un map para recoger los NOMBRES de museos/parques/etc
            case "Cultura":
                return {
                    ...state,
                    selectedCategory: true,
                    category: "cultura",
                    dropdown: pageInfoEndpoint.cultura.first.map(element => {
                        return element.name;
                    })
                }
            case "Ocio":
                return {
                    ...state,
                    selectedCategory: true,
                    category: "ocio",
                    dropdown: pageInfoEndpoint.ocio.first.map(element => {
                        return element.name;
                    })
                }
            case "Submit":
                return {
                    ...state,
                    showPlanning: true
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

    async function createPlan() {
        const res = await fetch('http://localhost:3001/visita', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPlan)
        });
        const response = await res.json();
        await addPlan(response);
    }
    
    /////////////////////////////////
    // COMPONENT RENDER

    if(props.hidden) {
        return null;
    } else {
        return (
            <div className="visita__content">
                <VisitaForm toggleContent={toggleContent} 
                            dispatch={categoryDispatch} 
                            dropdown={categoryState.dropdown} 
                            planning={planningEndpoint}
                            newPlan={newPlan}
                            setNewPlan={setNewPlan}
                            createPlan={createPlan}
                />

                <VisitaTabla isShown={categoryState.showPlanning} planning={planningEndpoint}/>
            </div>
        );
    }
}