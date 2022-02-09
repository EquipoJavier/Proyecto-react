
export default function VisitaForm(props) {
    const dispatch = props.dispatch; // Función dispatch del reducer
    const category = props.category; // Contiene la categoría seleccionada
    const dropdown = props.dropdown; // Contiene los elementos a mostrar de la categoría seleccionada
    const alteredPlan = props.alteredPlan; // Estado; contendrá los datos modificados del nuevo plan a insertar
    const setAlteredPlan = props.setAlteredPlan; // Función actualizadora del estado newPlan
    const createPlan = props.createPlan; // Función que ejecuta la inserción en el JSON de datos

    
    return (
        <div className="visita__content__form">
            <form onSubmit={e => e.preventDefault()}>

                {/* /////////////////////// INPUT */}
                <label>Día: </label>
                    <input type="date" onChange={event => {
                        setAlteredPlan({...alteredPlan, day: event.target.value})
                    }}/>
                    
                {/* /////////////////////// SELECT CATEGORY */}
                <label>Categoría: </label>
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
                <label>Qué hacer: </label>
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