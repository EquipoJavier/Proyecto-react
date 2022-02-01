import flecha from "../Recursos/img/flecha-hacia-arriba.png";
import { useLocation } from "react-router-dom";
import "./UpButton.scss";
import { useState } from "react";

export default function UpButton() {
  const location = useLocation();
  const path = location.pathname;

  const [visible, setVisible] = useState(false);

    const visibilidadBoton = () => {
      const scrolled = document.documentElement.scrollTop;   //La propiedad scrollTop establece o devuelve el número de píxeles que el contenido de un elemento se desplaza verticalmente.
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };

    window.addEventListener('scroll', visibilidadBoton);

  var currentClass = "";

  switch (path) {
    case "/transportes":
      currentClass = "btn__subir btn__subir--transportes";
      break;
    case "/ocio":
      currentClass = "btn__subir btn__subir--ocio";
      break;
    case "/gastronomia":
      currentClass = "btn__subir btn__subir--gastronomia";
      break;
    case "/cultura":
      currentClass = "btn__subir btn__subir--cultura";
      break;
    default:
      currentClass = "btn__subir btn__subir--index";
      break;
  }

  return (
    <>
      <div
        className= { currentClass }
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        style={{display: visible ? 'inline' : 'none'}}
      >
        <img src={flecha} alt=""></img>
      </div>
    </>
  );
}
