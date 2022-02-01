import { useState } from "react";
import "../CRUD_Voucher/VoucherCrud.scss";
import Bono from "./Bono/Bono";
import ButtonHiddenCrud from "./ButtonHiddenCrud/ButtonHiddenCrud";
import "./HiddenCrud.scss";
import Paragraph from "./Paragraph/Paragraph";

export default function HiddenCrud({ type, name, surname, fileInput, visibility , setCreate ,setDisabled }) {
  const [deletedDisabled, setDeletedDisabled] = useState(true);
  const [modifiedDisabled, setModifiedDisabled] = useState(true);

  const handleDelete = (e) => {
    setModifiedDisabled(false);
    setDeletedDisabled(true);
    localStorage.removeItem("name");
    localStorage.removeItem("img");
    localStorage.removeItem("surname");
    localStorage.removeItem("type");
    setCreate(false);
    setDisabled(true);
  };

  const handleModify = (e) => {
    setModifiedDisabled(true);
    setDeletedDisabled(false);
  };

  return (
    <div className={visibility}>
      <h2 className="visible--h2">
        Gracias por crear tu tarjeta online {name}!
      </h2>
      <div className="visible__content">
        <div className="visible__content">
          <div className="visible__content-paragraphs">
            <Paragraph />
            <div className="visible__content-paragraphs--changes">
              <ButtonHiddenCrud disabled={modifiedDisabled} className="but" handle={handleModify}  text="Modificar" />
              <ButtonHiddenCrud disabled={deletedDisabled} className="but" handle={handleDelete}  text="Eliminar" />
            </div>
          </div>
          <Bono bono={type} name={name} surname={surname} fileInput={fileInput} />
        </div>
      </div>
    </div>
  );
}
