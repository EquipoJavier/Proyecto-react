const options = [
  { value: "mensual", label: "Mensual" },
  { value: "azul", label: "Azul" },
  { value: "viajes", label: "Viajes" },
];

export default function Radio() {
  return (
    <>
      <label for="voucher">Elige una tarjeta:

      <select name="voucher" size={1}>
        { options.map((item)=>{ return <option value={item.value}>{item.label}</option> }) }
      </select>
      </label>
    </>
  );
}
