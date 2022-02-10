import loading from "../Recursos/img/loading.gif";

export default function Loading() {
  return (
    <img
      className="voucher__read-content--loading"
      style={{
        width: "70px",
      }}
      src={loading}
      alt="Loading..."
    />
  );
}
