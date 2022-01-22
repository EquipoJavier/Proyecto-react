import { useState } from "react";
import profileDefault from "../../Recursos/img/transport-profile.png";
import bono from "../../Recursos/img/crea-tu-bono.jpg";
import "./VoucherCrud.scss";

export default function VoucherCrud() {
  const [fileInput, setFileInput] = useState(profileDefault);
  const allowedFileTypes = [
    "image/png",
    "image/jpeg",
    "image/gif",
    "image/jpg",
  ];

  const imageHandler = (e) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      if (reader.readyState === 2) {
        allowedFileTypes.indexOf(e.target.files[0].type) > -1
          ? setFileInput(reader.result)
          : alert("Ha de ser una imagen jpeg, png o gif");
      } else {
        return;
      }
    };
    e.target.files[0] !== undefined && reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="voucher" id="voucher">
      <h1 className="voucher--h1">¡Crea tu propia tarjeta!</h1>
      <div className="voucher__content">
        <div className="voucher__content--form">
          <form>
            <input type="text" placeholder="Introduce tu nombre..." />
            <input type="text" placeholder="Introduce tus apellidos..." />
            <input
              type="file"
              name="img-upload"
              id="input"
              accept="image/*"
              onChange={imageHandler}
            />
            <label htmlFor="input" className="img-upload">
              <i className="material-icons">photo</i>
              Elige tu foto...
            </label>
          </form>
        </div>
        <div className="voucher__content--img">
          <img src={bono} alt=" " />
          <div className="voucher__content--img-holder">
            <img src={fileInput} alt=" " id="img" className="img" />
          </div>
        </div>
      </div>
    </div>
  );
}
