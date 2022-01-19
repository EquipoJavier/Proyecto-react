import ListTransport from "./ListTransport/ListTransport";
import Map from "./Map/Map";
import "./SectionLocation.scss";
import "../../../sass/base/animations.scss";
import LinkTransport from "./LinkTransport/LinkTransport";


export default function SectionLocation(){

    return(
        <>
        <section className="section__location" id="section__location">
            <h1 className="section__location--title">Cónoce como desplazarte</h1>
            <hr width="400" />
            <div className="section__location--flex">
                <Map />
                <LinkTransport />
                <ListTransport />
            </div>
        </section>
        </>
    )
}
