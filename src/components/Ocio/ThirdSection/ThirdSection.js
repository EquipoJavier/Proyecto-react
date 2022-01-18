import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";
import "./ThirdSection.scss";

export default function ThirdSection() {
  return (
    <section className="third__section" id="third__section">
      <h1 className="third__section--title">
        ¡LA DIVERSION REUNIDA EN UN SOLO LUGAR!
      </h1>
      <div className="row--ocio">
        <Card1 />
        <Card2 />
      </div>
      <div className="row--ocio">
        <Card3 />
        <Card4 />
      </div>
    </section>
  );
}
