import "./FirstSection.scss";

export default function FirstSection() {
    return (
        <>
            <section className="first__section" id="first__section">
                <div className="row--ocio">
                    <div className="col-1-of-2">
                        <h3 className="first__section--title">¡LA DIVERSIÓN ESTÁ EN MADRID!</h3>
                        <br /><br />
                        <p className="first__section--paraphrad">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                            eligendi aut, ab commodi mollitia numquam recusandae dolorem ex
                            provident consequuntur praesentium distinctio et porro nam, quidem
                            aperiam. Animi, cumque explicabo.
                        </p>
                        <br />
                        <p className="first__section--paraphrad">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                            eligendi aut, ab commodi mollitia numquam recusandae dolorem ex
                            provident consequuntur praesentium distinctio et porro nam, quidem
                            aperiam. Animi, cumque explicabo.
                        </p>
                    </div>
                    <div className="col-1-of-2 col-1-of-2">
                        <div className="rombos">
                            <img className="rombos--img" src="https://source.unsplash.com/random/600x600?cinema" alt="" />
                                <img className="rombos--img" src="https://source.unsplash.com/random/600x600?nature" alt=""/>
                                    <img className="rombos--img" src="https://source.unsplash.com/random/600x600?park" alt="" />
                                        <img className="rombos--img" src="https://source.unsplash.com/random/600x600?disco" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <br />
                            </section>
                        </>
                        )

}