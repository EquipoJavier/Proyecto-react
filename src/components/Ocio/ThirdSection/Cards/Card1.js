import "./Card.scss";
import card1Front from  "../../../Recursos/img/fondo_second_section_1.gif";
import iconParq1 from "../../../Recursos/img/icono parque atracciones.png";

export default function Card1(){
    return (
        <>
        <div className=" ">
          <div className="card--ocio">
            <div className="card--ocio__side card--ocio__side--front">
              <img src={card1Front} alt="" />
            </div>
            <div className="card--ocio__side card--ocio__side--back card--ocio__side card--ocio__side--back-1">
              <div className="card--ocio__cta">
                <img src={iconParq1} alt=""/>
                <p>
                  ¡Ven a conocer el paraiso de la diversión! Con un montón de
                  atracciones y adrenalina.
                </p>
                <br />
                <a href="transportes.html">Cómo llegar</a>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}