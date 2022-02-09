import './Visita_tabla.scss';

export default function VisitaTabla(props) {
    const planning = props.planning; // Contiene cada fila a presentar (cada plan, recuperado del json)
    const dispatch = props.dispatch; // Función dispatch del reducer

    /* Como la estructura del json está hecha de forma diferente para cada categoría ([...].data.gastronomia.restaurantes.[...] para los restaurantes,
        [...].cultura.museos.[...] para los museos...), en el dispatch hace falta devolver tanto la categoría (cultura) como la propiedad del objeto (museos),
        por separado. Por eso, en vez de hacer el dispatch directamente en el onClick, se llama a la función "dispatchUpdate()", que recibe el elemento a
        modificar de la tabla, y en función de su categoría, se define el "índice" de esa categoría que va a almacenar los elementos a recuperar (los restaurantes,
        museos, etc) */
    function dispatchUpdate(row) {
        var categoryIndex = "";

        switch (row.category) {
            case "GASTRONOMIA":
                categoryIndex = "restaurantes";
                break;
            case "CULTURA":
                categoryIndex = "first";
                break;
            case "OCIO":
                categoryIndex = "first";
                break;
            default:
                categoryIndex = ""
        }

        dispatch({
            type: "UPDATE",
            payload: {
                day: row.day,
                category: row.category,
                option: row.option,
                id: row.id
            },
            categoryIndex: categoryIndex
        })
    }

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
                                    <button onClick={() => {dispatchUpdate(row)}}>Cambiar</button>
                                    <button onClick={() => dispatch({
                                        type: "DELETE",
                                        payload: {
                                            day: row.day,
                                            category: row.category,
                                            option: row.option,
                                            id: row.id
                                        },
                                    })}>Eliminar</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}