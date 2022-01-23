import profileDefault from "../../Recursos/img/transport-profile.png";
import bono from "../../Recursos/img/crea-tu-bono.jpg";
import Form from "./Form/Form";
import useSemiPersistentState from "./useSemiPersistentState.js";
import "./VoucherCrud.scss";

export default function VoucherCrud() {
  const [fileInput, setFileInput] = useSemiPersistentState("img", profileDefault);
  const [name, setName] = useSemiPersistentState("name", "");

  return (
    <div className="voucher" id="voucher">
      <h1 className="voucher--h1">¡Crea tu propia tarjeta!</h1>
      <div className="voucher__content">
        <div className="voucher__content--form">
          <Form setFileInput={setFileInput} name={name} setName={setName} />
        </div>
        <div className="voucher__content--img">
          <img src={bono} alt=" " />
            <p className="voucher__content--img--name">{name}</p>
          <div className="voucher__content--img-holder">
            <img src={fileInput} alt=" " id="img" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
}
