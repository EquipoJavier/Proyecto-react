import card3Front from "../../../Recursos/img/fondo_second_section_3.gif";
import iconParq3 from "../../../Recursos/img/icono zoo.png";

export default function Card3() {
  return (
    <div class="col-1-of-2">
      <div class="card--ocio">
        <div class="card--ocio__side card--ocio__side--front">
          <img src={card3Front} alt="" />
        </div>
        <div class="card--ocio__side card--ocio__side--back card--ocio__side--back-3">
          <div class="card--ocio__cta">
            <img src={iconParq3} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              ullam laboriosam quae at eligendi! At repellendus, cum neque nemo
            </p>
            <br />
            <a href="transportes.html">Cómo llegar</a>
          </div>
        </div>
      </div>
    </div>
  );
}
