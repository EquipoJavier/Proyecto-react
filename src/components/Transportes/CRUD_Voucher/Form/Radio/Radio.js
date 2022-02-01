const options = [
  { value: "mensual", label: "Mensual", id:"1" },
  { value: "azul", label: "Azul", id:"2" },
  { value: "viajes", label: "Viajes", id:"3" },
];



export default function Radio({ setType }) {

  function handleChange(e) {
    setType(e.target.value);
  }

  return (
    <>
      <label htmlFor="voucher">Elige tarjeta

      <select name="voucher" size={1} onChange={handleChange} >
        { options.map((item)=>{ return <option key={item.id} value={item.value}>{item.label}</option> }) }
      </select>
      </label>
    </>
  );
}
