import InputImage from "./InputImage/InputImage";
import LabelInput from "./LabelInput/LabelInput";
import profileDefault from "../../../Recursos/img/transport-profile.png";
import bono from "../../../Recursos/img/crea-tu-bono.jpg";
import { useState } from "react";
import Select from "./Select/Select";
import "./Form.scss";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import axios from "axios";

export default function Form({setDone, user, setShowForm}) {

  const [newVoucher, setNewVoucher] = useState({
    name: sessionStorage.getItem("tar-name") || "",
    surname: sessionStorage.getItem("tar-surname") || "",
    fileInput: null,
    type: "mensual",
    propertyOf: user,
  });

  const handleName = (e) => {
    setNewVoucher({...newVoucher, name : e.target.value});
    sessionStorage.setItem("tar-name", e.target.value);
  };

  const handleSurName = (e) => {
    setNewVoucher({...newVoucher, surname : e.target.value});
    sessionStorage.setItem("tar-surname", e.target.value);
  };
  console.log(newVoucher);
  const url = "http://localhost:3001/tarjetas";

  async function createNewVoucher(){

    if(newVoucher.name!=""&&newVoucher.surname!=""&&newVoucher.fileInput!=null&&newVoucher.propertyOf!=""){
      await axios.post(url, newVoucher).then((response)=> {
        alert('Tarjeta creada');
        sessionStorage.removeItem("tar-name");
        sessionStorage.removeItem("tar-surname");
        setShowForm(false);
        setDone(false);
      }).catch((error)=> {console.log(error)});
    }else{
      alert("Introduce todos tus datos antes de crear la tarjeta");
    }
  };

  return (
    <div className="voucher__form-content">
      <div className="voucher__form-content--form">
        <form className="voucher__form-content--form-f">
          <LabelInput value={newVoucher.name} handle={handleName} text={"Nombre"} />
          <LabelInput
            value={newVoucher.surname}
            handle={handleSurName}
            text={"Apellidos"}
          />
          <Select newVoucher={newVoucher} setNewVoucher={setNewVoucher} />
          <InputImage newVoucher={newVoucher} setNewVoucher={setNewVoucher} />
          <Button
            style={{
              fontSize: "14px",
              textAlign: "center",
            }}
            variant="contained"
            color="primary"
            startIcon={<Add />}
            onClick={createNewVoucher}
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
