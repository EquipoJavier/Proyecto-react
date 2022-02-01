export default function InputImage({ setFileInput }) {

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
    <>
      <input
        type="file"
        name="img-upload"
        id="input"
        accept="image/*"
        onChange={imageHandler}
      ></input>
      <label htmlFor="input" className="photo">
        <i className="material-icons">photo</i>
        Elige una foto...
      </label>
    </>
  );
}
