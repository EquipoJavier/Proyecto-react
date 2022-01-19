export default function Ligero() {
  return (
    <>
      <a href="#popup_m_ligero">
        <div className="col-1-of-2 choose__transport_options--option">
          <img src="../Recursos/img/metroligero_xl.gif" alt="" />
          <h2>Metro Ligero</h2>
        </div>
      </a>
      <div id="popup_m_ligero" className="popup--transporte">
        <div className="popup--transporte__body">
          <h2>Mapa del metro ligero</h2>
          <br />
          <br />
          <a className="popup--transporte__close" href="#choose__transport">
            &times;
          </a>
          <div className="popup--transporte__content">
            <iframe
              title="ligero"
              src="https://www.metromadrid.es/sites/default/files/web/planos/MetroLigeroesp.pdf"
              width="600vw"
              height="350vh"
              style= {{ border:0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
