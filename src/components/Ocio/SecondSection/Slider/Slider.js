import "./Slider.scss";
import slider1 from "../../../Recursos/img/carrousel1.jpg";
import slider2 from "../../../Recursos/img/carrousel2.jpg";
import slider3 from "../../../Recursos/img/carrousel3.png";
import slider4 from "../../../Recursos/img/carrousel4.png";
import slider5 from "../../../Recursos/img/carrousel5.png";


export default function Slider(){
    return(

<figure class="slider">
  <div class="slider__content">
   <img className="slider__item" src={slider1} alt=""/>
   <img className="slider__item" src={slider2} alt=""/>
   <img className="slider__item" src={slider3} alt=""/>
   <img className="slider__item" src={slider4} alt=""/>
   <img className="slider__item" src={slider5} alt=""/>
  </div>
</figure>
    )
}