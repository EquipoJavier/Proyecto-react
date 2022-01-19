import Bus from "./Bus/Bus";
import Roads from "./Roads/Roads";
import "./SectionAllTransports.scss";

export default function SectionAllTransports() {
  return (
    <section className="section__allTransports">
      <h1>¡Desplázate, ahorra, visita!</h1>
      <Bus />
      <Roads />
    </section>
  );
}
