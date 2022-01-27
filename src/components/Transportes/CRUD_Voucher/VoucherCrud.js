import profileDefault from "../../Recursos/img/transport-profile.png";
import bono from "../../Recursos/img/crea-tu-bono.jpg";
import Form from "./Form/Form";
import "./VoucherCrud.scss";

export default function VoucherCrud({ name, setName, setCreate, surname, setSurName, setFileInput, setDisabled , disabled}) {

  return (
    <div className="voucher" id="voucher">
      <h1 className="voucher--h1">¡Crea todas las tarjetas para tu familia!</h1>
      <div className="voucher__content">
        <div className="voucher__content--form">
          <Form setCreate={setCreate} setFileInput={setFileInput} name={name} setName={setName} surname={surname} setSurName={setSurName} setDisabled={setDisabled} disabled={disabled} />
        </div>
        <div className="voucher__content--img">
          <img src={bono} alt=" " />
          <div className="voucher__content--img-holder">
            <img src={profileDefault} alt=" " id="img" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
}
