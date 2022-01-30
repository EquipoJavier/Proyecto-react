import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import './Visita.scss';
import VisitaContenido from './Visita_contenido/Visita_contenido';

export default function Visita() {
    const [hidden, setHidden] = useState(true);
    const [test, setTest] = useState([]);
    const [done, setDone] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3001/TESTgastr')
        .then((result) => result.json())
        .then((asd) => {
            setTest(asd);
            setDone(true);
        })
    }, []);

if (done) {
    var arrayPlatos = test.platos.map(plato => {
        console.log(plato.name);
        return plato.name;
    })
    console.log("-----------------");
    var arrayRestaurantes = test.restaurantes.map(restaurante => {
        console.log(restaurante.name);
        return restaurante.name;
    })
}


    function toggleContent() {
        setHidden(!hidden);
    }

    return (
        <div className="visita__body">
            <div className="visita__box">
                <div className="visita__addButton">
                    <Button title="Añadir elemento al itinerario" hoverClass="violet" onClick={() => {
                        toggleContent();
                    }} />
                </div>
                <VisitaContenido hidden={hidden} restaurantes={arrayRestaurantes}/>
            </div>
        </div>
    );
}