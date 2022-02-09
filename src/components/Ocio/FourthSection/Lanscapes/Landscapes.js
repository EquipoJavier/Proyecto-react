import "./Landscapes.scss";
import Slider from "infinite-react-carousel";
import landscape1 from "../../../Recursos/img/ruta-escorial.jpg";
import landscape2 from "../../../Recursos/img/silla-felipe.jpg";
import landscape3 from "../../../Recursos/img/hayedo-de-montejo.jpg";
import landscape4 from "../../../Recursos/img/Palacio_Real_de_Aranjuez_0.webp";
import landscape5 from "../../../Recursos/img/parque-sierra--guadarrama.jpg";

const settings = {
  autoplay: true,
  dots: true,
  slidesPerRow: 3,
};

export default function Landscapes() {
  return (
    <div className="slider-rutas">
    
    <Slider { ...settings }>
     
      <div className="slider-rutas--each">
        <img src={landscape1} alt=""></img>
        <h3>Ruta por</h3>
        <p>Chanante ipsum dolor sit amet, nui, pepino en la mano ut gañán saepe. Nostrud bonico del tó, nisi ut piticli magna bizcoché ex ut ex minim ex zagal adipisicing.</p>
      </div>
      <div className="slider-rutas--each">
        <img src={landscape2} alt=""></img>
        <h3>Ruta por</h3>
        <p>Chanante ipsum dolor sit amet, nui, pepino en la mano ut gañán saepe. Nostrud bonico del tó, nisi ut piticli magna bizcoché ex ut ex minim ex zagal adipisicing.</p>
      </div>
      <div className="slider-rutas--each">
        <img src={landscape3} alt=""></img>
        <h3>Ruta por</h3>
        <p>Chanante ipsum dolor sit amet, nui, pepino en la mano ut gañán saepe. Nostrud bonico del tó, nisi ut piticli magna bizcoché ex ut ex minim ex zagal adipisicing.</p>
      </div>
      <div className="slider-rutas--each">
        <img src={landscape4} alt=""></img>
        <h3>Ruta por</h3>
        <p>Chanante ipsum dolor sit amet, nui, pepino en la mano ut gañán saepe. Nostrud bonico del tó, nisi ut piticli magna bizcoché ex ut ex minim ex zagal adipisicing.</p>
      </div>
      <div className="slider-rutas--each">
        <img src={landscape5} alt=""></img>
        <h3>Ruta por</h3>
        <p>Chanante ipsum dolor sit amet, nui, pepino en la mano ut gañán saepe. Nostrud bonico del tó, nisi ut piticli magna bizcoché ex ut ex minim ex zagal adipisicing.</p>
      </div>
      <div className="slider-rutas--each">
        <img src={landscape1} alt=""></img>
        <h3>Ruta por</h3>
        <p>Chanante ipsum dolor sit amet, nui, pepino en la mano ut gañán saepe. Nostrud bonico del tó, nisi ut piticli magna bizcoché ex ut ex minim ex zagal adipisicing.</p>
      </div>
      <div className="slider-rutas--each">
        <img src={landscape1} alt=""></img>
        <h3>Ruta por</h3>
        <p>Chanante ipsum dolor sit amet, nui, pepino en la mano ut gañán saepe. Nostrud bonico del tó, nisi ut piticli magna bizcoché ex ut ex minim ex zagal adipisicing.</p>
      </div>
      <div className="slider-rutas--each">
        <img src={landscape1} alt=""></img>
        <h3>Ruta por</h3>
        <p>Chanante ipsum dolor sit amet, nui, pepino en la mano ut gañán saepe. Nostrud bonico del tó, nisi ut piticli magna bizcoché ex ut ex minim ex zagal adipisicing.</p>
      </div>
      <div className="slider-rutas--each">
        <img src={landscape1} alt=""></img>
        <h3>Ruta por</h3>
        <p>Chanante ipsum dolor sit amet, nui, pepino en la mano ut gañán saepe. Nostrud bonico del tó, nisi ut piticli magna bizcoché ex ut ex minim ex zagal adipisicing.</p>
      </div>
      
    </Slider>
  </div>
  );
}
