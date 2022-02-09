import "./SecondSection.scss";
// import salaCine from "../../Recursos/img/salacine.jpg";
// import palomitas from "../../Recursos/img/palomitas.png";
import Slider from "./Slider/Slider";
import IconoParques from "../../Recursos/img/ico_ocio.png";
import IconoMarinos from "../../Recursos/img/ico_marino.png";
import IconoZoos from "../../Recursos/img/ico_zoos.png";
import IconoAcuaticos from "../../Recursos/img/ico_acuaticos.png";
import IconoOtros from "../../Recursos/img/ico_otros.png";

// const [showContent,setShowContent]=useState(true);

// function handleClick(event){
//     display='none';
//     setShowContent(false);
// }




export default function SecondSection() {

    return (
        <>
            <section className="second__section" id="second__section">
                {/* <h2 className="second__section--title">LOS MEJORES ESTRENOS EN LOS CINES DE MADRID</h2>
                {/* <img className="second__section--sala" src={salaCine} alt=""/>
                    <img className="second__section--palomitas" src={palomitas} alt=""/> */}
                     {/* <Slider />  */}
                     <div className="park-part">
                     <h2>PURA ADRENALINA DE DIVERSIÓN </h2>
                     <p>Madrid cuenta con unos lugares increibles para llevar la diversión al extremo y provocar ese chute de adenalia que te dejará una experiencia inigualable y querrás repetir sin dudarlo.
                     Parques Reunidos es uno de los líderes mundiales de operadores de parques de ocio. La cartera del Grupo comprende más de 60 activos (parques de ocio y temáticos, zoológicos, acuarios, parques acuáticos y otras atracciones) en Europa, Norteamérica, Oriente Medio y Australi
                     </p>
                     <p>Madrid cuenta con unos lugares increibles para llevar la diversión al extremo y provocar ese chute de adenalia que te dejará una experiencia inigualable y querrás repetir sin dudarlo.
                         ¡Estamos esperandote para que vengas con tu familia o tus amigos a pasar un dia increible en 
                         uno de nuestros lugares favoritos!
                     </p>
                     <ul className="park-part--icons">
                         <li>
                            <a href="" >
                                <img src={IconoParques} alt=""></img>
                            <br/>PARQUES DE ATRACCIONES</a>
                        </li>
                        <li>
                            <a href="" >
                                <img src={IconoZoos} alt=""></img>
                                <br/>ACUARIOS</a>
                        </li>
                        <li>
                            <a href="" >
                                <img src={IconoAcuaticos} alt=""></img>
                                <br/>ZOOLÓGICOS</a>
                        </li>
                        <li>
                            <a href="" >
                                <img src={IconoOtros} alt=""></img>
                                <br/>OTROS</a>
                        </li>
                     </ul>
                     </div>
                    </section>
                </>
                )
}