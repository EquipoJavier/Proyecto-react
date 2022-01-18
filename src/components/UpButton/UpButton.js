import "./UpButton.scss";
import flecha from "../Recursos/img/flecha-hacia-arriba.png";

export default function UpButton() {
  return (
    <>
      <div
        className="btn__subir"
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
