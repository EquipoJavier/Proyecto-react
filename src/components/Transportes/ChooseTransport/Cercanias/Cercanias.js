export default function Cercanias() {
  return (
    <>
      <a href="#popup_cerca">
        <div class="col-1-of-2 choose__transport_options--option">
          <img src="../Recursos/img/cercanias_xl.gif" alt="" />
          <h2>Cercanías</h2>
        </div>
      </a>
      <div id="popup_cerca" class="popup--transporte">
        <div class="popup--transporte__body">
          <h2>Mapa del Cercanías</h2>
          <br />
          <br />
          <a class="popup--transporte__close" href="#choose__transport">
            &times;
          </a>
          <div class="popup--transporte__content">
            <iframe
              title="cercanias"
              src="https://www.crtm.es/media/393460/cercanias.pdf"
              width="600vw"
              height="350vh"
              style= {{border:0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
