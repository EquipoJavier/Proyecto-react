import './Visita_tabla.scss';

export default function VisitaTabla(props) {
    const planning = props.planning;
    const dispatch = props.dispatch;

    return (
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
                            <tr key={row.id}>
                                <td>{row.day}</td>
                                <td>{row.category}</td>
                                <td>{row.option}</td>
                                <td className="visita__content__table--buttons">
                                    <button onClick={() => {
                                        dispatch({
                                            type: "Update",
                                            payload: {
                                                day: row.day,
                                                category: row.category,
                                                option: row.option,
                                                id: row.id
                                            }
                                        })
                                        }}>Cambiar</button>
                                    <button>Eliminar</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}