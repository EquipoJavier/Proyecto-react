import Card1 from "./Card1/Card1";
import Card2 from "./Card2/Card2";
import Card3 from "./Card3/Card3";
import Card4 from "./Card4/Card4";

export default function ThirdSection() {
  return (
    <section class="third__section" id="third__section">
      <h1 class="third__section--title">
        ¡LA DIVERSION REUNIDA EN UN SOLO LUGAR!
      </h1>
      <div class="row--ocio">
        <Card1 />
        <Card2 />
      </div>
      <div class="row--ocio">
        <Card3 />
        <Card4 />
      </div>
    </section>
  );
}
