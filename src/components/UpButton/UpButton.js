import flecha from "../Recursos/img/flecha-hacia-arriba.png";
import { useLocation } from "react-router-dom";
import "./UpButton.scss";

export default function UpButton() {
  const location = useLocation();
  const path = location.pathname;

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
    case "/visita":
      currentClass = "btn__subir btn__subir--visita";
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
      >
        <img src={flecha} alt=""></img>
      </div>
    </>
  );
}
