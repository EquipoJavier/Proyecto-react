import Routes from "./Routes/Routes";
import "./FourthSection.scss";

export default function FourthSection() {
    return (
        <>
            <section className="fourth__section">
                <h2 className="fourth__section--title">DESCUBRE TUS RUTAS PARA DESCONECTAR</h2>
                <div className="fourth__section--routes">
               <Routes name="image1"/>
               <Routes name="image2"/>
               <Routes name="image3"/>
               <Routes name="image4"/>
               </div>
            </section>
        </>
    )
}