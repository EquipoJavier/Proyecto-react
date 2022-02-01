import mensual from "../../../Recursos/img/crea-tu-bono.jpg";
import azul from "../../../Recursos/img/tarjeta_azul_maria_detras.jpg";

export default function Bono({type, bono, name, surname, fileInput}) {
  return (
    <div className="visible__content-bono">
      <img src={localStorage.getItem("type")} alt=" " />
      <p className="visible__content-bono--names">{name + "\n" + surname}</p>
      <div className="visible__content-bono--holder">
        <img src={fileInput} alt=" " id="img" className="img" />
      </div>
    </div>
  );
}
