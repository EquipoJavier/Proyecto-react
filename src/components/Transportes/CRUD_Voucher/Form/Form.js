export default function Form(props) {
  const setFileInput = props.setFileInput;
  const name = props.name;
  const setName = props.setName;
  const allowedFileTypes = [
    "image/png",
    "image/jpeg",
    "image/gif",
    "image/jpg",
  ];

  const handleName = (e) => {
    setName(e.target.value);
  };

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
    <form className="voucher__content--form-f">
      <label value={name} onChange={handleName}>
        Nombre:
        <input type="text" placeholder="Introduce tu nombre..." />
      </label>
      <label>
        Apellidos:
        <input type="text" placeholder="Introduce tus apellidos..." />
      </label>
      <input
        type="file"
        name="img-upload"
        id="input"
        accept="image/*"
        onChange={imageHandler}
      />
      <label htmlFor="input" className="photo">
        <i className="material-icons">photo</i>
        Elige una foto...
      </label>
    </form>
  );
}
