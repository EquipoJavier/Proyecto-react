import './UpdateForm.scss';

export default function UpdateForm(props) {
    const isShown = props.isShown;
    const dropdown = props.dropdown;
    const category = props.category.toUpperCase();
    const dispatch = props.dispatch;
    const selectedPlan = props.selectedPlan;
    console.log(selectedPlan);
    
    return isShown ? (
        <>
            <div className="update">
                <div className="update__content">
                    <div className="update__form">
                        <span className="update__form__header">Modifca tu plan</span>
                        
                        <form onSubmit={e => e.preventDefault()}>
                            <label>Día:</label>
                                <input type="date" value={selectedPlan.day} onChange={event =>{
                                    console.log("DIA CAMBIADO: ", event.target.value)
                                }}/>
                                
                            {/* /////////////////////// SELECT CATEGORY */}
                            <label>Categoría:</label>
                                <select defaultValue={category} onChange={event => {
                                    dispatch({type: event.target.value})
                                    console.log("CATEGORIA CAMBIADO: ", event.target.value)
                                }}>
                                    <option style={{display:"none"}}>--- Elige ---</option>
                                    <option>CULTURA</option>
                                    <option>GASTRONOMIA</option>
                                    <option>OCIO</option>
                                </select>
                            
                            {/* /////////////////////// SELECT ITEM */}
                            <label>Qué hacer:</label>
                                <select defaultValue={selectedPlan.option} onChange={event => {
                                    console.log("OPCION CAMBIADO: ", event.target.value)
                                }}>
                                    <option style={{display:"none"}}>--- Elige ---</option>
                                    {dropdown.map(element => {
                                        return <option key={element}>{element}</option>
                                    })}
                                </select>

                            {/* /////////////////////// SUBMIT */}
                            <div className="update__form__buttons">
                                <button>
                                    Actualizar
                                </button> 
                                <button className="update__close" onClick={() => {
                                    dispatch({type: "CloseForm"})
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