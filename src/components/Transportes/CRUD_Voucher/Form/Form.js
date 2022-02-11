import InputImage from "./InputImage/InputImage";
import LabelInput from "./LabelInput/LabelInput";
import { useEffect, useState } from "react";
import Select from "./Select/Select";
import "./Form.scss";
import axios from "axios";
import Bono from "./Bono/Bono";
import FormButton from "./FormButton/FormButton";

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
    setNewVoucher({ ...newVoucher, name: e.target.value.toUpperCase() });
    sessionStorage.setItem("tar-name", e.target.value);
  };

  const handleSurName = (e) => {
    setNewVoucher({ ...newVoucher, surname: e.target.value.toUpperCase() });
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
          {JSON.stringify(forUpdate)=='{}' ? (
            <FormButton comp={"Add"} f={createNewVoucher} text={"Crear nueva tarjeta"} />
          ) : (
            <FormButton btnColor={"green"} btnBack={"white"} bcolor={"inherit"} comp={"Edit"} f={editVoucher} text={"Aceptar los cambios"} />
          )}
        </form>
      </div>
      <Bono name={newVoucher.name} surname={newVoucher.surname} fileInput={newVoucher.fileInput} />
    </div>
  );
}
