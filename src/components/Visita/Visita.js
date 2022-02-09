import { useState, useReducer, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import VisitaForm from './VisitaForm/VisitaForm';
import VisitaTabla from './VisitaTabla/Visita_tabla';
import UpdateForm from './UpdateForm/UpdateForm';
import DeleteForm from './DeleteForm/DeleteForm';

import './Visita.scss';
import loadingGif from '../Recursos/img/loading.gif'


export default function Visita() {

    // Recuperar los datos pasados al componente Outlet de react-router desde App.js
    const [done , pageEndPoint, alterPlan] = useOutletContext(); 
    
    /* Objeto "plantilla" vacío con la estructura con que se guardan los planes en el
        json. Se usa para "limpiar" estados/variables que manipulen planes (inserción,
        modificación, etc) */
    const initialPlanState = {
        day: "",
        category: "",
        option: ""
    };
    
    /* Estado que almacenará el plan que se va a insertar/modificar/borrar en el json */
    const [alteredPlan, setAlteredPlan] = useState(initialPlanState);

    /* Estado inicial del reducer que gestiona el contenido de ciertos campos de los 
        formularios de inserción/modificación/borrado */
    const initialCategoryState = {
        selectedPlan: {}, // Guarda los datos del plan cuando se va a modifcar/borrar
        showPlanning: false, // Muestra (o no) el popup de modificación de un plan
        showDelete: false,
        category: "--- Elige ---",
        dropdown: [],
    }

    const categoryReducer = (state, action) => {
        switch (action.type) {
            case "GASTRONOMIA":
                return {
                    ...state,
                    category: "GASTRONOMIA",
                    dropdown: pageEndPoint.data.gastronomia.restaurantes.map(restaurante => {
                        return restaurante.name;
                    })
                }

            // Cultura y ocio son temporales, esto es un ejemplo a falta de datos.
            // Pero la idea es la misma que en gastronomía: un map para recoger los NOMBRES de museos/parques/etc
            case "CULTURA":
                return {
                    ...state,
                    category: "CULTURA",
                    dropdown: pageEndPoint.data.cultura.first.map(element => {
                        return element.name;
                    })
                }
            case "OCIO":
                return {
                    ...state,
                    category: "OCIO",
                    dropdown: pageEndPoint.data.ocio.first.map(element => {
                        return element.name;
                    })
                }
            case "UPDATE":
                setAlteredPlan(action.payload)
                return {
                    category: action.payload.category,
                    selectedPlan: action.payload,
                    showPlanning: true,
                    dropdown: pageEndPoint.data[action.payload.category.toLowerCase()][action.categoryIndex].map(element => {
                        return element.name;
                    })
                }
            case "DELETE":
                return {
                    ...state,
                    selectedPlan: action.payload,
                    showDelete: true
                }
            case "CLOSE_FORM":
                setAlteredPlan(initialPlanState)
                return {
                    ...state,
                    category: "--- Elige ---",
                    selectedPlan: {},
                    showPlanning: false,
                    showDelete: false
                }
            default:
                return {initialCategoryState}
        }
    } 

    const [categoryState, categoryDispatch] = useReducer(
        categoryReducer,
        initialCategoryState
    );


    async function createPlan() {
        const res = await fetch('http://localhost:3001/visita', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(alteredPlan)
        });
        const response = await res.json();
        await alterPlan(response, "create");
    }

    async function updatePlan() {
        const id = alteredPlan.id;
        const url = `http://localhost:3001/visita/${id}`;

        const res = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(alteredPlan)
        });
        const response = await res.json();
        await alterPlan(response, "update");
    }

    async function deletePlan(alteredPlan) {
        const id = alteredPlan.id;
        const url = `http://localhost:3001/visita/${id}`;
        
        const res = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(alteredPlan)
        });
        
        await alterPlan(alteredPlan, "delete"); // Esta vez hay que pasar el plan a borrar, en vez del resultado de fetch() (ya que éste devuelve un objeto vacío)
    }

    

    /////////////////////////////////
    // COMPONENT RENDER

    if (done) {
        return (
            <div className="visita__body">
                <div className="visita__box">
                    <VisitaForm dispatch={categoryDispatch} 
                                category={categoryState.category}
                                dropdown={categoryState.dropdown} 
                                alteredPlan={alteredPlan}
                                setAlteredPlan={setAlteredPlan}
                                createPlan={createPlan}
                    />

                    <VisitaTabla planning={pageEndPoint.planning} 
                                 dispatch={categoryDispatch} 
                    />
                    <UpdateForm isShown={categoryState.showPlanning}
                                dropdown={categoryState.dropdown} 
                                category={categoryState.category}
                                dispatch={categoryDispatch} 
                                selectedPlan={categoryState.selectedPlan}
                                alteredPlan={alteredPlan}
                                setAlteredPlan={setAlteredPlan}
                                updatePlan={updatePlan}
                    />
                    <DeleteForm isShown={categoryState.showDelete}
                                dispatch={categoryDispatch} 
                                selectedPlan={categoryState.selectedPlan}
                                deletePlan={deletePlan}
                    />
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