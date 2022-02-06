import { useState } from "react";
export default function VisitaForm(props) {
    const dispatch = props.dispatch;
    const dropdown = props.categoryElements;
    const newPlan = props.newPlan;
    const setNewPlan = props.setNewPlan;
    const createPlan = props.createPlan;
    // const [planning, setPlanning] = props.planning;

    const submitData = e => {
        e.preventDefault();
        // fetch('http://localhost:3001/data', {
        //     method: 'POST',
        //     body: JSON.stringify({planning}),
        //     headers: { 'Content-Type': 'application/json'},
        // })
        // .then(res => res.json())
        // .then(result => setPlanning(result.planning))
    }
    
    return (
        <div className="visita__content__form">
            <form onSubmit={submitData}>
                <label>Día: </label>
                {/* /////////////////////// INPUT */}
                    {/* <input type="date" /> */}

                    {/* <input type="date" onChange={event => {
                        setPlanning({...planning, day: event.target.value})
                    }}/> */}

                    <input type="date" onChange={event => {
                        setNewPlan({...newPlan, day: event.target.value})
                    }}/>
                    
                {/* /////////////////////// SELECT CATEGORY */}
                    <label>Categoría: </label>
                    {/* <select onChange={event => {dispatch({type:event.target.value})}}> */}

                    {/* <select onChange={event => {
                            dispatch({type:event.target.value});
                            setPlanning({...planning, category: event.target.value})
                        }}> */}

                    <select onChange={event =>  {
                            dispatch({type:event.target.value});
                            setNewPlan({...newPlan, category: event.target.value})
                    }}>
                        <option style={{display:"none"}}>--- Elige ---</option>
                        <option>Cultura</option>
                        <option>Gastronomía</option>
                        <option>Ocio</option>
                    </select>


                {/* /////////////////////// SELECT ITEM */}
                    <label>Qué hacer: </label>
                    {/* <select> */}

                    {/* <select onChange={event => {
                        setPlanning({...planning, option: event.target.value})
                    }}> */}

                    <select onChange={event => {
                        setNewPlan({...newPlan, option: event.target.value})
                    }}>
                        <option style={{display:"none"}}>--- Elige ---</option>
                        {dropdown.map(element => {
                            return <option key={element}>{element}</option>
                        })}
                    </select>

                    <button className="visita__content__form--submit" onClick={() => {
                        dispatch({type:"Submit"});
                        createPlan();
                    }}>
                        Añadir itinerario
                    </button> 
            </form>
        </div>
    )
}