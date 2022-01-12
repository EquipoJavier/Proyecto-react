import ListTransport from "./ListTransport/ListTransport";
import Map from "./Map/Map";


export default function SectionLocation(){

    return(
        <>
        <section className="section__location" id="section__location">
            <h1 className="section__location--title">Cónoce como desplazarte</h1>
            <div className="row--transporte">
                <Map />
                <ListTransport />
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi, est explicabo cupiditate quo animi dolore amet architecto quia debitis voluptate voluptas, officiis magnam consectetur iusto, unde consequatur voluptates suscipit.
            Nostrum aliquid exercitationem non cumque, nemo, perferendis quibusdam placeat inventore molestiae expedita voluptate. Modi distinctio tempora ex earum rem, dolore natus rerum quo labore! Repudiandae est tenetur magnam rem totam?</p>
        </section>
        </>
    )
}
