import './UpdateForm.scss';

export default function UpdateForm(props) {
    const isShown = props.isShown; // Indica si el componente se muestra
    const category = props.category; // Contiene la categoría seleccionada
    const dropdown = props.dropdown; // Contiene los elementos a mostrar de la categoría seleccionada
    const dispatch = props.dispatch; // Función dispatch del reducer
    const selectedPlan = props.selectedPlan // Contiene los datos del plan (fila de la tabla) seleccionado
    const newPlan = props.newPlan; // Estado; contendrá los nuevos datos modificados del plan seleccionado
    const setNewPlan = props.setNewPlan; // Función actualizadora del estado newPlan
    const updatePlan = props.updatePlan; // Función que ejecuta la actualización en el JSON de datos
    
    return isShown ? (
        <>
            <div className="update">
                <div className="update__content">
                    <div className="update__form">
                        <span className="update__form__header">Modifca tu plan</span>
                        
                        <form onSubmit={e => e.preventDefault()}>
                            <label>Día:</label>
                                <input type="date" defaultValue={selectedPlan.day} onChange={event =>{
                                    setNewPlan({...newPlan, day: event.target.value})
                                }}/>
                                
                            {/* /////////////////////// SELECT CATEGORY */}
                            <label>Categoría:</label>
                                <select defaultValue={category} onChange={event => {
                                    dispatch({type: event.target.value})
                                    setNewPlan({...newPlan, category: event.target.value})
                                }}>
                                    <option style={{display:"none"}}>--- Elige ---</option>
                                    <option>CULTURA</option>
                                    <option>GASTRONOMIA</option>
                                    <option>OCIO</option>
                                </select>
                            
                            {/* /////////////////////// SELECT ITEM */}
                            <label>Qué hacer:</label>
                                <select defaultValue={selectedPlan.option} onChange={event => {
                                    setNewPlan({...newPlan, option: event.target.value})
                                }}>
                                    <option style={{display:"none"}}>--- Elige ---</option>
                                    {dropdown.map(element => {
                                        return <option key={element}>{element}</option>
                                    })}
                                </select>

                            {/* /////////////////////// SUBMIT */}
                            <div className="update__form__buttons">
                                <button onClick={() => {
                                    updatePlan();
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
            </div>
        </>
    ) : (
        null
    );
}