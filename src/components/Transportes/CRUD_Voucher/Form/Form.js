import InputImage from "./InputImage/InputImage";
import LabelInput from "./LabelInput/LabelInput";
import Radio from "./Radio/Radio";

export default function Form(props) {

  const name = props.name;
  const setName = props.setName;
  const surname = props.surname;
  const setSurName = props.setSurName;


  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSurName = (e) => {
    setSurName(e.target.value);
  };

  const handleCreate = (e) => {
    props.setCreate(true);
    props.setDisabled(false);
    localStorage.setItem("name", sessionStorage.getItem("name"));
    localStorage.setItem("surname", sessionStorage.getItem("surname"));
    localStorage.setItem("img", sessionStorage.getItem("img"));
    localStorage.setItem("type", sessionStorage.getItem("type"));
  };

  return (
    <>
      <form className="voucher__content--form-f">
        <LabelInput value={name} handle={handleName} text={"Nombre"} />
        <LabelInput value={surname} handle={handleSurName} text={"Apellidos"} />
        <Radio setType={props.setType} />
        <InputImage setFileInput={props.setFileInput} />
        <button disabled={!props.disabled } className="but" type="button" onClick={() => { handleCreate() }} > Crear </button>
        <button disabled={props.disabled} className="but" type="button" > Aceptar los cambios </button>
      </form>
    </>
  );
}
