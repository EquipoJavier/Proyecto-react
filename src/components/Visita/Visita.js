import Button from '../Button/Button';
import './Visita.scss';
export default function Visita() {
    return (
        <div className="visita__body">
            <div className="visita__box">
                <div className="visita__addButton">
                    <Button title="Añadir elemento al itinerario" hoverClass="darkRed"/>
                </div>
                <div className="visita__content">
                    El formulario saldría al darle al botón de añadir. La tabla aparecería al añadir al menos un elemento.
                    <div className="visita__content__form">
                        <label>Día: </label>
                        <input type="date" />

                        <label>Categoría: </label>
                        <select>
                            <option>--- Elige ---</option>
                            <option>Cultura</option>
                            <option>Gastronomía</option>
                            <option>Ocio</option>
                            <option>Transporte</option>
                        </select>

                        <label>A dónde ir: </label>
                        <select>
                            <option>--- Elige ---</option>
                            <option>Opción 1</option>
                            <option>Opción 2</option>
                            <option>Opción 3</option>
                            <option>Opción 4</option>
                        </select>

                        <button className="visita__content__form--submit">
                            Añadir itinerario
                        </button>
                    </div>


                    <div className="visita__content__table">
                        <table>
                            <tr>
                                <th>Días</th>
                                <th>Categoría</th>
                                <th>Qué hacer</th>
                            </tr>
                            <tr>
                                <td>28/1/2022</td>
                                <td>Gastronomía</td>
                                <td>Restaurante La Bola</td>
                                <div className="visita__content__table--buttons">
                                    <button>Cambiar</button>
                                    <button>Eliminar</button>
                                </div>
                            </tr>
                            <tr>
                                <td>28/1/2022</td>
                                <td>Cultura</td>
                                <td>Museo del Prado</td>
                                <div className="visita__content__table--buttons">
                                    <button>Cambiar</button>
                                    <button>Eliminar</button>
                                </div>
                            </tr>
                            <tr>
                                <td>29/1/2022</td>
                                <td>Cultura</td>
                                <td>Museo Thyssen</td>
                                <div className="visita__content__table--buttons">
                                    <button>Cambiar</button>
                                    <button>Eliminar</button>
                                </div>
                            </tr>
                            <tr>
                                <td>29/1/2022</td>
                                <td>Ocio</td>
                                <td>Parque Faunia</td>
                                <div className="visita__content__table--buttons">
                                    <button>Cambiar</button>
                                    <button>Eliminar</button>
                                </div>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}