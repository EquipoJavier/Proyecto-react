import { useState } from "react";
import bono from "../../Recursos/img/crea-tu-bono.jpg";
import "../CRUD_Voucher/VoucherCrud.scss";
import "./HiddenCrud.scss";

export default function HiddenCrud({ name, surname, fileInput, visibility }) {
    const [deletedDisabled, setDeletedDisabled] = useState(true);
    const [modifiedDisabled, setModifiedDisabled] = useState(true);

    const handleDelete = (e) => {
        setModifiedDisabled(false);
        setDeletedDisabled(true);
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
            <div className="visible__content-paragraphs--p">
              <p>
                Presente esta tarjeta en su oficina correspondiente y te
                entregarán una física.
              </p>
              <p>
                Recuerde que siempre puede{" "}
                <strong>
                  <i>modificar</i>
                </strong>{" "}
                sus datos o{" "}
                <strong>
                  <i>eliminar</i>
                </strong>{" "}
                esta tarjeta.
              </p>
            </div>
            <div className="visible__content-paragraphs--changes">
              <button disabled={!modifiedDisabled} className="but" type="button" onClick={() => { handleModify() }}> Modificar </button>
              <button disabled={!deletedDisabled} className="but" type="button" onClick={() => { handleDelete() }} > Eliminar </button>
            </div>
          </div>
          <div className="visible__content-bono">
            <img src={bono} alt=" " />
            <p className="visible__content-bono--names">{name + "\n" + surname}</p>
            <div className="visible__content-bono--holder">
              <img src={fileInput} alt=" " id="img" className="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
