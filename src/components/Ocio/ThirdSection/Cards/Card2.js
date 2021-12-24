import "./Card.scss";
import card2Front from "../../../Recursos/img/fondo_second_section_2.gif";
import iconParq2 from "../../../Recursos/img/icono warner.png";

export default function Card2() {
  return (
    <div class="col-1-of-2">
      <div class="card--ocio">
        <div class="card--ocio__side card--ocio__side--front">
          <img src={card2Front} alt="" />
        </div>
        <div class="card--ocio__side card--ocio__side--back card--ocio__side--back-2">
          <div class="card--ocio__cta">
            <img src={iconParq2} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus illo perspiciatis cumque aperiam temporibus deleniti
            </p>
            <br />
            <a href="transportes.html">Cómo llegar</a>
          </div>
        </div>
      </div>
    </div>
  );
}
