
export default function VisitaForm(props) {
    const dispatch = props.dispatch;
    const category = props.category; // Contiene la categoría seleccionada
    const dropdown = props.dropdown;
    const alteredPlan = props.alteredPlan;
    const setAlteredPlan = props.setAlteredPlan;
    const createPlan = props.createPlan;

    
    return (
        <div className="visita__content__form">
            <form onSubmit={e => e.preventDefault()}>
                <label>Día: </label>
                {/* /////////////////////// INPUT */}
                    <input type="date" onChange={event => {
                        setAlteredPlan({...alteredPlan, day: event.target.value})
                    }}/>
                    
                {/* /////////////////////// SELECT CATEGORY */}
                    <select value={category} onChange={event =>  {
                            dispatch({type:event.target.value});
                            setAlteredPlan({...alteredPlan, category: event.target.value})
                    }}>
                        <option style={{display:"none"}}>--- Elige ---</option>
                        <option>CULTURA</option>
                        <option>GASTRONOMIA</option>
                        <option>OCIO</option>
                    </select>


                {/* /////////////////////// SELECT ITEM */}
                    <select onChange={event => {
                        setAlteredPlan({...alteredPlan, option: event.target.value})
                    }}>
                        <option style={{display:"none"}}>--- Elige ---</option>
                        {dropdown.map(element => {
                            return <option key={element}>{element}</option>
                        })}
                    </select>

                {/* /////////////////////// SUBMIT */}
                    <button className="visita__content__form--submit" onClick={() => {
                        createPlan();
                    }}>
                        Añadir itinerario
                    </button> 
            </form>
        </div>
    )
}