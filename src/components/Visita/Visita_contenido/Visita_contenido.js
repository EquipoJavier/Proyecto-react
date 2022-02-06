import { useState, useReducer } from 'react';
import './Visita_contenido.scss';
import VisitaTabla from './Visita_tabla/Visita_tabla';
import VisitaForm from './VisitaForm/VisitaForm';

export default function VisitaContenido(props) {
    const [hidden, setHidden] = useState(true);
    const [pageInfoEndpoint, planningEndpoint] = props.pageEndPoint;
    const [newPlan, setNewPlan] = useState({
        day: "",
        category: "",
        option: ""
    });

    const initialCategoryState = {
        selectedCategory: false,
        showPlanning: false,
        category: "",
        categoryElements: []
    }

    const categoryReducer = (state, action) => {
        switch (action.type) {
            case "Gastronomía":
                return {
                    selectedCategory: true,
                    category: "gastronomia",
                    categoryElements: pageInfoEndpoint.gastronomia.restaurantes.map(restaurante => {
                        return restaurante.name;
                    })
                }

            // Cultura y ocio son temporales, esto es un ejemplo a falta de datos.
            // Pero la idea es la misma que en gastronomía: un map para recoger los NOMBRES de museos/parques/etc
            case "Cultura":
                return {
                    selectedCategory: true,
                    category: "cultura",
                    categoryElements: pageInfoEndpoint.cultura.first.map(element => {
                        return element.name;
                    })
                }
            case "Ocio":
                return {
                    selectedCategory: true,
                    category: "ocio",
                    categoryElements: pageInfoEndpoint.ocio.first.map(element => {
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
        // planningEndpoint.push(newPlan);
        console.log(newPlan);

        const res = await fetch('http://localhost:3001/visita', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPlan)
        });
        const content = await res.json();
        console.log(content);
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
                            categoryElements={categoryState.categoryElements} 
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