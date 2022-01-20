import "./Card.scss";
import card4Front from "../../../Recursos/img/fondo_second_section_4.gif";
import iconParq4 from "../../../Recursos/img/icono faunia.png";

export default function Card4(){
    return(
        <div className=" ">
          <div className="card--ocio">
            <div className="card--ocio__side card--ocio__side--front">
              <img src={card4Front} alt=""/>
            </div>
            <div className="card--ocio__side card--ocio__side--back card--ocio__side--back-4">
              <div className="card--ocio__cta">
                <img src={iconParq4} alt=""/>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam ullam laboriosam quae at eligendi! At repellendus, cum
                  neque nemo
                </p>
                <br />
                <a href="transportes.html">Cómo llegar</a>
              </div>
            </div>
          </div>
        </div>
    )

}