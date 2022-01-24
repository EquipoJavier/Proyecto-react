export default function Bono({bono, name, surname, fileInput}) {
  return (
    <div className="visible__content-bono">
      <img src={bono} alt=" " />
      <p className="visible__content-bono--names">{name + "\n" + surname}</p>
      <div className="visible__content-bono--holder">
        <img src={fileInput} alt=" " id="img" className="img" />
      </div>
    </div>
  );
}
