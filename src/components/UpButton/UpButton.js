import "./UpButton.scss";
import flecha from "../Recursos/img/flecha-hacia-arriba.png";

export default function UpButton() {

  return (
    <>
    <a href="#header__transporte">
        <div className="btn__subir">
            <img src={flecha} alt=""></img>
        </div>
    </a>
    </>
  )
}