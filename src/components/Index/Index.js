import Header from "./Header/Header";
import gastronomia from "../Recursos/img/index-gastronomía.jpg";
import cultura from "../Recursos/img/index-cultura.png";
import ocio from "../Recursos/img/index-ocio.jfif";
import transporte from "../Recursos/img/index-transportes.png";
import "./Index.scss";


export default function Index(){
    return(
        <>
        <Header />
        <section className="section__index">
        <h2>¿Qué quieres buscar?</h2>
        <div className="row--transporte">
            <div className="story">
                <figure className="story__shape">
                    <img src={gastronomia} alt="Gastronomía" className="story__img" />
                    <figcaption className="story__caption">
                        Gastronomía
                    </figcaption>
                </figure>
                <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        <a style={{textDecoration: "none", color: "black"}} href="/gastronomia">Gastronomia</a>
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ex excepturi vitae
                        explicabo dignissimos iusto blanditiis! Velit asperiores consectetur tempora adipisci
                        repellat animi omnis deserunt temporibus, nisi aspernatur voluptatibus odit.
                    </p>

                </div>
            </div>
        </div>
        <div className="row--transporte">
            <div className="story">
                <figure className="story__shape">
                    <img src={cultura} alt="Cultura" className="story__img" />
                    <figcaption className="story__caption">Cultura</figcaption>
                </figure>
                <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        <a style={{textDecoration: "none", color: "black"}} href="/cultura">Cultura</a>
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur
                        libero repellat quis consequatur
                        ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                        repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                    </p>
                </div>
            </div>
        </div>
        <div className="row--transporte">
            <div className="story">
                <figure className="story__shape">
                    <img width="150" src={ocio} alt="Ocio" className="story__img" />
                    <figcaption className="story__caption">
                        Ocio
                    </figcaption>
                </figure>
                <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        <a style={{textDecoration: "none", color: "black"}} href="/ocio">Ocio</a>
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ex excepturi vitae
                        explicabo dignissimos iusto blanditiis! Velit asperiores consectetur tempora adipisci
                        repellat animi omnis deserunt temporibus, nisi aspernatur voluptatibus odit.
                    </p>

                </div>
            </div>
        </div>
        <div className="row--transporte">
            <div className="story">
                <figure className="story__shape">
                    <img width="150" src={transporte} alt="Transportes" className="story__img" />
                    <figcaption className="story__caption">Transportes</figcaption>
                </figure>
                <div className="story__text">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        <a style={{textDecoration: "none", color: "black"}} href="/transportes">Transportes</a>
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur
                        libero repellat quis consequatur
                        ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                        repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                    </p>
                </div>
            </div>
        </div>
    </section>
    </>
    )
}