export default function Ligero() {
  return (
    <>
      <a href="#popup_m_ligero">
        <div class="col-1-of-2 choose__transport_options--option">
          <img src="../Recursos/img/metroligero_xl.gif" alt="" />
          <h2>Metro Ligero</h2>
        </div>
      </a>
      <div id="popup_m_ligero" class="popup--transporte">
        <div class="popup--transporte__body">
          <h2>Mapa del metro ligero</h2>
          <br />
          <br />
          <a class="popup--transporte__close" href="#choose__transport">
            &times;
          </a>
          <div class="popup--transporte__content">
            <iframe
              title="ligero"
              src="https://www.metromadrid.es/sites/default/files/web/planos/MetroLigeroesp.pdf"
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
