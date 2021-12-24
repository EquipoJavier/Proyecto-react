import "./SecondSection.scss";
import salaCine from "../../Recursos/img/salacine.jpg";
import palomitas from "../../Recursos/img/palomitas.png";
import Slider from "./Slider/Slider";


export default function SecondSection() {

    return (
        <>
            <section className="second__section" id="second__section">
                <h2 className="second__section--title">LOS MEJORES ESTRENOS EN LOS CINES DE MADRID</h2>
                <img className="second__section--sala" src={salaCine} alt=""/>
                    <img className="second__section--palomitas" src={palomitas} alt=""/>
                     <Slider />
                    </section>
                </>
                )
}