import InputImage from "./InputImage/InputImage";
import LabelInput from "./LabelInput/LabelInput";
import profileDefault from "../../../Recursos/img/transport-profile.png";
import bono from "../../../Recursos/img/crea-tu-bono.jpg";
import { useEffect, useState } from "react";
import Select from "./Select/Select";
import "./Form.scss";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Edit from "@mui/icons-material/Edit";
import axios from "axios";

export default function Form({ url, forUpdate, setForUpdate, setDone, user, setShowForm }) {
  const [newVoucher, setNewVoucher] = useState({
    name: sessionStorage.getItem("tar-name") || "",
    surname: sessionStorage.getItem("tar-surname") || "",
    fileInput: null,
    type: "mensual",
    propertyOf: user,
  });

  useEffect(() => {
    forUpdate != {} && setNewVoucher({ ...newVoucher, ...forUpdate });
    return () => {
      setNewVoucher({});
    }
  }, [forUpdate]);

  const handleName = (e) => {
    setNewVoucher({ ...newVoucher, name: e.target.value });
    sessionStorage.setItem("tar-name", e.target.value);
  };

  const handleSurName = (e) => {
    setNewVoucher({ ...newVoucher, surname: e.target.value });
    sessionStorage.setItem("tar-surname", e.target.value);
  };

  async function createNewVoucher() {
    if (
      newVoucher.name != "" &&
      newVoucher.surname != "" &&
      newVoucher.fileInput != null &&
      newVoucher.propertyOf != ""
    ) {
      await axios
        .post(url, newVoucher)
        .then((response) => {
          alert("Tarjeta creada");
          sessionStorage.removeItem("tar-name");
          sessionStorage.removeItem("tar-surname");
          setShowForm(false);
          setDone(false);
          setForUpdate({});
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Inicia sesión e introduce todos tus datos antes de crear la tarjeta");
    }
  }

  async function editVoucher() {
    if (
      newVoucher.name != "" &&
      newVoucher.surname != "" &&
      newVoucher.fileInput != null &&
      newVoucher.propertyOf != ""
    ) {
      await axios
        .put(url+"/"+newVoucher.id, newVoucher)
        .then((response) => {
          alert("Tarjeta actualizada");
          sessionStorage.removeItem("tar-name");
          sessionStorage.removeItem("tar-surname");
          setShowForm(false);
          setDone(false);
          setNewVoucher(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Inicia sesión e introduce todos tus datos antes de crear la tarjeta");
    }
  }

  return (
    <div className="voucher__form-content">
      <div className="voucher__form-content--form">
        <form className="voucher__form-content--form-f">
          <LabelInput
            value={newVoucher.name}
            handle={handleName}
            text={"Nombre"}
          />
          <LabelInput
            value={newVoucher.surname}
            handle={handleSurName}
            text={"Apellidos"}
          />
          <Select newVoucher={newVoucher} setNewVoucher={setNewVoucher} />
          <InputImage newVoucher={newVoucher} setNewVoucher={setNewVoucher} />
          {forUpdate == {} ? (
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
          ) : (
            <Button
              style={{
                fontSize: "14px",
                textAlign: "center",
                color: "green",
                backgroundColor: "white"
              }}
              variant="contained"
              color="inherit"
              startIcon={<Edit />}
              onClick={editVoucher}
            >
              Aceptar los cambios
            </Button>
          )}
        </form>
      </div>
      <div className="voucher__form-content--img">
        <img src={bono} alt=" " />
          <p className="voucher__form-content--img-p1">{newVoucher.name.toUpperCase()}</p>
          <p className="voucher__form-content--img-p2">{newVoucher.surname.toUpperCase()}</p>
        <div className="voucher__form-content--img-holder">
          <img src={newVoucher.fileInput} alt=" " id="img" className="img" />
        </div>
      </div>
    </div>
  );
}
