import "./FourthSection.scss";
import landscape1 from "../../Recursos/img/casa-campo.jpeg";
import landscape2 from "../../Recursos/img/silla-felipe.jpg";
import landscape3 from "../../Recursos/img/hayedo-de-montejo.jpg";
import landscape4 from "../../Recursos/img/Palacio_Real_de_Aranjuez_0.webp";

export default function FourthSection() {
    return (
        <>
            <section className="fourth__section" id="fourth__section">
                <h2 className="fourth__section--title">DESCUBRE TUS RUTAS PARA DESCONECTAR</h2>
                <div className="row--ocio">
                    <div className="col-1-of-4">
                        <img className="fourth__section--1" src={landscape1} alt="" />
                            <h4 className="fourth__section--text fourth__section--text--1">Ruta Casa de Campo</h4>
                    </div>
                    <div className="col-1-of-4">
                        <img className="fourth__section--2" src={landscape2} alt="" />
                            <h4 className="fourth__section--text fourth__section--text--2">Ruta de la silla de Felipe II</h4>
                    </div>
                    <div className="col-1-of-4">
                        <img className="fourth__section--3" src={landscape3} alt="" />
                            <h4 className="fourth__section--text fourth__section--text--3">Ruta de Hayedo de Montejo</h4>
                    </div>
                    <div className="col-1-of-4">
                        <img className="fourth__section--4" src={landscape4} alt="" />
                            <h4 className="fourth__section--text fourth__section--text--4">Palacio Aranjuez</h4>
                    </div>
                </div>
            </section>
        </>
    )
}