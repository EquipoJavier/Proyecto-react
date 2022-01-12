export default function Metro() {
  return (
    <>
      <a href="#popup_metro">
        <div className="col-1-of-3 choose__transport_options--option">
          <img src="../Recursos/img/metro_xl.gif" alt="" />
          <h2>Metro Madrid</h2>
        </div>
      </a>
      <div id="popup_metro" className="popup--transporte">
        <div className="popup--transporte__body">
          <h2>Mapa del Metro de Madrid</h2>
          <br />
          <br />
          <a className="popup--transporte__close" href="#choose__transport">
            &times;
          </a>
          <div className="popup--transporte__content">
            <iframe
              title="metro"
              src="https://www.metromadrid.es/sites/default/files/web/planos/Plano_base_cartografica_junio_2020.pdf"
              width="600vw"
              height="350vh"
              style= {{ border:0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
