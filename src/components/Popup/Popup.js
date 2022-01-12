import "./Popup.scss";
import PopupElem from './Popup-elem';
import cocidoImg from '../Recursos/img/gastr-cocido.jpg';
import callosImg from '../Recursos/img/gastr-callos.jpg';
import calamaresImg from '../Recursos/img/gastr-bocadilloCalamares.jpg';
import churrosImg from '../Recursos/img/gastr-churros.jpg';

/* Idealmente el "json" que le pases a Popup para que los presente en pantalla lo deberías pasar a través de la página que lo vaya a usar
(Gastronomía le pasa "platos", Transportes le pasa "medios de transporte", etc). No sé cómo hacer eso exactamente, así que de momento a modo
de prueba, voy a poner los datos de los platos aquí, a la espera de saber cómo pasarle el "json" aquí para dejar Popup como un componetne genérico.*/

/* Las imágenes no están cargadas desde la carpeta '/src/Recursos/img' sino desde: '/public/imagenesTest'. Si luego descubrieramos una mejor forma de 
importar imágenes, habría que refactorizar el nombre de esa carpeta (la de /public/imagenesTest) y cambiar el 'src' de la imagen en Popup-elem.js */
const dishes = [
    {
        name: "Cocido",
        img: cocidoImg,
        descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Callos",
        img: callosImg,
        descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Calamares",
        img: calamaresImg,
        descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Churros",
        img: churrosImg,
        descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
]

export default function Popup() {
    return (
        <div className="popup">
            {dishes.map(function(dish) {
                return (
                    <div className="popup__elem" key={dish.name}>
                        <PopupElem dish={dish}/>
                    </div>
                )
            })}
        </div>
    )
}