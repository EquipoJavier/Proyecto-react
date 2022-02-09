import InputImage from "./InputImage/InputImage";
import LabelInput from "./LabelInput/LabelInput";
import profileDefault from "../../../Recursos/img/transport-profile.png";
import bono from "../../../Recursos/img/crea-tu-bono.jpg";
import { useState } from "react";
import Select from "./Select/Select";
import "./Form.scss";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";

export default function Form() {
  const [name, setName] = useState(null);
  const [surname, setSurName] = useState(null);
  const [fileInput, setFileInput] = useState(null);
  const [type, setType] = useState(null);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSurName = (e) => {
    setSurName(e.target.value);
  };

  return (
    <div className="voucher__form-content">
      <div className="voucher__form-content--form">
        <form className="voucher__form-content--form-f">
          <LabelInput value={name} handle={handleName} text={"Nombre"} />
          <LabelInput
            value={surname}
            handle={handleSurName}
            text={"Apellidos"}
          />
          <Select setType={setType} />
          <InputImage setFileInput={setFileInput} />
          <Button
            style={{
              fontSize: "14px",
              textAlign: "center",
            }}
            variant="contained"
            color="warning"
            startIcon={<Add />}
          >
            Crear nueva tarjeta
          </Button>
        </form>
      </div>
      <div className="voucher__form-content--img">
        <img src={bono} alt=" " />
        <div className="voucher__form-content--img-holder">
          <img src={profileDefault} alt=" " id="img" className="img" />
        </div>
      </div>
    </div>
  );
}
