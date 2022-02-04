import './Visita_tabla.scss';

export default function VisitaTabla(props) {
    const planning = props.planning;
    const isShown = props.isShown;

    

    return isShown ? (
        <div className="visita__content__table">
            <table>
                <thead>
                    <tr>
                        <th>Días</th>
                        <th>Categoría</th>
                        <th>Qué hacer</th>
                    </tr>
                </thead>
                <tbody>
                    {planning.length === 0 ? null : planning.map(row => {
                        return (
                            <tr>
                                <td>{row.day}</td>
                                <td>{row.category}</td>
                                <td>{row.option}</td>
                                <td className="visita__content__table--buttons">
                                    <button>Cambiar</button>
                                    <button>Eliminar</button>
                                </td>
                            </tr>
                        )
                    })}
                    {/* <tr>
                        <td>28/1/2022</td>
                        <td>Gastronomía</td>
                        <td>Restaurante La Bola</td>
                        <td className="visita__content__table--buttons">
                            <button>Cambiar</button>
                            <button>Eliminar</button>
                        </td>
                    </tr>
                    <tr>
                        <td>28/1/2022</td>
                        <td>Cultura</td>
                        <td>Museo del Prado</td>
                        <td className="visita__content__table--buttons">
                            <button>Cambiar</button>
                            <button>Eliminar</button>
                        </td>
                    </tr>
                    <tr>
                        <td>29/1/2022</td>
                        <td>Cultura</td>
                        <td>Museo Thyssen</td>
                        <td className="visita__content__table--buttons">
                            <button>Cambiar</button>
                            <button>Eliminar</button>
                        </td>
                    </tr>
                    <tr>
                        <td>29/1/2022</td>
                        <td>Ocio</td>
                        <td>Parque Faunia</td>
                        <td className="visita__content__table--buttons">
                            <button>Cambiar</button>
                            <button>Eliminar</button>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    ) : (
        null
    )
}