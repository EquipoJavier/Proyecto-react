import ListTransport from "./ListTransport/ListTransport";
import Map from "./Map/Map";
import "./SectionLocation.scss";
import "../../../sass/base/animations.scss";
import LinkTransport from "./LinkTransport/LinkTransport";

export default function SectionLocation({ done, pageEndPoint }) {
  return (
    <>
      <section className="section__location">
        <h1 className="section__location--title">Cónoce como desplazarte</h1>
        <hr width="400" />
        <div className="section__location--flex">
          <Map />
          <LinkTransport done={done} pageEndPoint={pageEndPoint} />
          <ListTransport />
        </div>
      </section>
    </>
  );
}
