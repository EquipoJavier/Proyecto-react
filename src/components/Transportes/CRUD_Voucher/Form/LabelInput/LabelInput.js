
export default function LabelInput({ value, handle, text }) {

  return (
      <label value={value} onChange={handle}>
      {text}
      <input type="text" placeholder={`Introduce tu(s) ${text}...`} />
    </label>
  );
}