import './UpdateForm.scss';
import capitalize from '../../../utils/capitalize';
import { useState } from 'react';

export default function UpdateForm(props) {
    const isShown = props.isShown; // Indica si el componente se muestra
    const dispatch = props.dispatch; // Función dispatch del reducer
    const category = capitalize(props.category.toLowerCase()); // Contiene la categoría seleccionada
    const dropdown = props.dropdown; // Contiene los elementos a mostrar de la categoría seleccionada
    const selectedPlan = props.selectedPlan // Contiene los datos del plan (fila de la tabla) seleccionado
    const alteredPlan = props.alteredPlan; // Estado; contendrá los nuevos datos modificados del plan seleccionado
    const setAlteredPlan = props.setAlteredPlan; // Función actualizadora del estado newPlan
    const updatePlan = props.updatePlan; // Función que ejecuta la actualización en el JSON de datos

    const [isUpdating, setIsUpdating] = useState(false)
    function updating() {
        // deletePlan(selectedPlan)
        setIsUpdating(true)
        setTimeout(() => {
            dispatch({type:"CLOSE_FORM"})
            setIsUpdating(false)
            updatePlan();
        }, 1500);
    }

    return isShown ? (
        <div className="update">
            {!isUpdating ? 
            (
                <div className="update__content">
                    <div className="update__form">
                        <span className="update__form__header">Modifca tu plan</span>
                        
                        <form onSubmit={e => e.preventDefault()}>
                            
                        {/* /////////////////////// INPUT */}
                            <label>Día:</label>
                                <input type="date" defaultValue={selectedPlan.day} onChange={event =>{
                                    setAlteredPlan({...alteredPlan, day: event.target.value})
                                }}/>
                                
                            {/* /////////////////////// SELECT CATEGORY */}
                            <label>Categoría:</label>
                                <select defaultValue={category} onChange={event => {
                                    dispatch({type:event.target.value.toUpperCase()});
                                    setAlteredPlan({...alteredPlan, category: event.target.value})
                                }}>
                                    <option style={{display:"none"}}>--- Elige ---</option>
                                    <option>Cultura</option>
                                    <option>Gastronomia</option>
                                    <option>Ocio</option>
                                </select>
                            
                            {/* /////////////////////// SELECT ITEM */}
                            <label>Qué hacer:</label>
                                <select defaultValue={selectedPlan.option} onChange={event => {
                                    setAlteredPlan({...alteredPlan, option: event.target.value})
                                }}>
                                    <option style={{display:"none"}}>--- Elige ---</option>
                                    {dropdown.map(element => {
                                        return <option key={element}>{element}</option>
                                    })}
                                </select>

                            {/* /////////////////////// SUBMIT */}
                            <div className="update__form__buttons">
                                <button onClick={() => {
                                    updating();
                                }}>
                                    Actualizar
                                </button> 
                                <button className="update__close" onClick={() => {
                                    dispatch({type: "CLOSE_FORM"})
                                }}>Cerrar</button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <div className='update__content'>
                    <h1>Actualizando...</h1>
                </div>
            )}
        </div>
    ) : (
        null
    );
}