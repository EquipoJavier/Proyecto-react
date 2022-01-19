import "./Slider.scss";
import slider1 from "../../../Recursos/img/carrousel1.jpg";
import slider2 from "../../../Recursos/img/carrousel2.jpg";
import slider3 from "../../../Recursos/img/carrousel3.png";
import slider4 from "../../../Recursos/img/carrousel4.png";

//he cambiado el nombre="carrousel" por slider
export default function Slider(){
    return(
    //     <>
    //     <div className="slider">
    //     <div className="slider--img">
    //         <img className="img_slider" src={slider1} alt="" height="400" width="800" />
    //         <img className="img_slider" src={slider2} alt="" height="400" width="800" />
    //         <img className="img_slider" src={slider3} alt="" height="400" width="800" />
    //         <img className="img_slider" src={slider4} alt="" height="400" width="800" />
    //     </div>
    // </div>
    // </>

<figure class="icon-cards mt-3">
  <div class="icon-cards__content">
   <img className="icon-cards__item d-flex align-items-center justify-content-center" src={slider1} />
   <img className="icon-cards__item d-flex align-items-center justify-content-center" src={slider2} />
   <img className="icon-cards__item d-flex align-items-center justify-content-center" src={slider3} />
   <img className="icon-cards__item d-flex align-items-center justify-content-center" src={slider4} />
  </div>
</figure>
    )
}