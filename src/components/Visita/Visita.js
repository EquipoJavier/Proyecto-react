import { useState, useReducer } from 'react';
import { useOutletContext } from 'react-router-dom';
import VisitaForm from './VisitaForm/VisitaForm';

import loadingGif from '../Recursos/img/loading.gif'
import VisitaTabla from './VisitaTabla/Visita_tabla';

import './Visita.scss';
import UpdateForm from './UpdateForm/UpdateForm';

export default function Visita() {
    const [done , pageEndPoint, addPlan] = useOutletContext();

    const [hidden, setHidden] = useState(true);
    const [newPlan, setNewPlan] = useState({
        day: "",
        category: "",
        option: ""
    });

    const initialCategoryState = {
        selectedCategory: false,
        selectedPlan: {},
        showPlanning: false,
        category: "",
        dropdown: [],
    }

    const categoryReducer = (state, action) => {
        switch (action.type) {
            case "Gastronomía":
                return {
                    ...state,
                    selectedCategory: true,
                    category: "Gastronomía",
                    dropdown: pageEndPoint.data.gastronomia.restaurantes.map(restaurante => {
                        return restaurante.name;
                    })
                }

            // Cultura y ocio son temporales, esto es un ejemplo a falta de datos.
            // Pero la idea es la misma que en gastronomía: un map para recoger los NOMBRES de museos/parques/etc
            case "Cultura":
                return {
                    ...state,
                    selectedCategory: true,
                    category: "Cultura",
                    dropdown: pageEndPoint.data.cultura.first.map(element => {
                        return element.name;
                    })
                }
            case "Ocio":
                return {
                    ...state,
                    selectedCategory: true,
                    category: "Ocio",
                    dropdown: pageEndPoint.data.ocio.first.map(element => {
                        return element.name;
                    })
                }
            case "Update":
                return {
                    ...state,
                    category: action.payload.category,
                    selectedPlan: action.payload,
                    showPlanning: true
                }
            case "CloseForm":
                return {
                    ...state,
                    selectedPlan: {},
                    showPlanning: false
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

    async function updatePlan(plan) {
        // console.log(plan);
    }

    

    /////////////////////////////////
    // COMPONENT RENDER

    if (done) {
        return (
            <div className="visita__body">
                <div className="visita__box">
                    <VisitaForm dispatch={categoryDispatch} 
                                dropdown={categoryState.dropdown} 
                                newPlan={newPlan}
                                setNewPlan={setNewPlan}
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