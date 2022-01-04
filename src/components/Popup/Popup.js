import "./Popup.scss";
import PopupElem from './Popup-elem';

/* Idealmente el "json" que le pases a Popup para que los presente en pantalla lo deberías pasar a través de la página que lo vaya a usar
(Gastronomía le pasa "platos", Transportes le pasa "medios de transporte", etc). No sé cómo hacer eso exactamente, así que de momento a modo
de prueba, voy a poner los datos de los platos aquí, a la espera de saber cómo pasarle el "json" aquí para dejar Popup como un componetne genérico.*/
const dishes = [
    {
        name: "Cocido",
        img: '../Recursos/img/gastr-cocido.jpg',
        descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Callos",
        img: '../Recursos/img/gastr-cocido.jpg',
        descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Calamares",
        img: '../Recursos/img/gastr-cocido.jpg',
        descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Churros",
        img: '../Recursos/img/gastr-cocido.jpg',
        descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
]

export default function Popup() {
    return (
        <div className="popup">
            {/* {dishes.map(function(dish) {
                return (
                    <div key={dish.name}>
                        <PopupElem dish={dish}/>
                    </div>
                )
            })} */}
            <div className="popup__elem">test</div>
            <div className="popup__elem">test</div>
            <div className="popup__elem">test</div>
            <div className="popup__elem">test</div>
        </div>
    )
}