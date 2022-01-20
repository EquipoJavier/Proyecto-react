
import Card from "./Cards/Card";
import "./ThirdSection.scss";

export default function ThirdSection() {
  return (
    <section className="third__section" id="third__section">
      <h1 className="third__section--title">
        ¡LA DIVERSION REUNIDA EN UN SOLO LUGAR!
      </h1>
       <div>
       <Card name={"Card1"} />
       <Card name={"Card2"} />
       <Card name={"Card3"} />
       <Card name={"Card4"} />
      </div>
    </section>
  );
}
