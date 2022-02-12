import { useState } from 'react';
import './DeleteForm.scss';
export default function DeleteForm(props) {
    const isShown = props.isShown; // Indica si el componente se muestra
    const dispatch = props.dispatch; // Función dispatch del reducer
    const selectedPlan = props.selectedPlan // Contiene los datos del plan (fila de la tabla) seleccionado
    const deletePlan = props.deletePlan; // Función que ejecuta el borrado en el JSON de datos

    const [isDeleting, setIsDeleting] = useState(false)
    function deleting() {
        // deletePlan(selectedPlan)
        setIsDeleting(true)
        setTimeout(() => {
            dispatch({type:"CLOSE_FORM"})
            setIsDeleting(false)
            deletePlan(selectedPlan);
        }, 1500);
    }

    return isShown ? (
        <div className='delete'>
            {!isDeleting ? 
                ( 
                    <div className='delete__content'>
                        <div className="delete__text">
                            <h1>Estás a punto de borrar un plan</h1>
                            <span className='delete__planElement'>Día: {selectedPlan.day}</span>
                            <span className='delete__planElement'>Categoría: {selectedPlan.category}</span>
                            <span className='delete__planElement'>Plan: {selectedPlan.option}</span>
                        </div>
                        <div className='delete__buttons'>
                            <button onClick={() => {
                                deleting();
                            }}>Confirmar</button>
                            <button onClick={() => dispatch({type:"CLOSE_FORM"})}>Cancelar</button>
                        </div>
                    </div> 
                ) : (
                    <div className='delete__content'>
                        <h1>Borrando...</h1>
                    </div>
                )
            }
        </div>
    ) : (
        null
    )
}