import './Popup.scss';

export default function HiddenBox(props) {
    const transport = props.transport;

    // Ver "Popup-elem.js" para la explicación de cómo funciona el popup
    /* Lo ideal sería sacar el botón como componente aparte, pero no sé como haría para el tema de los estados, para pasarle la variable que controla
    si el popup se muestra o no */
    if(props.buttonPopup) {
        return (
            <div className="popup__background" id={transport.name}>
                <div className="popup__box">
                    <div className="popup__box--left">
                    {/* <img className="popup__box--img" src={transport.img} alt={transport.name} /> */}
                    </div>
                    <div className="popup__box--right">
                        <h1 className="popup__box--heading">{transport.name}</h1>
                        <p className="popup__box--descr">{transport.descr}</p>
                        <button className="closeButton" onClick={function() {
                            props.setButtonPopup(false)
                        }}>Cerrar</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
}