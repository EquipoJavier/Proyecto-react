export default function Interurbano() {
  return (
    <>
      <a href="#popup_inter">
        <div class="col-1-of-3 choose__transport_options--option">
          <img src="../Recursos/img/interurbanos_cm_xl.gif" alt="" />
          <h2>Líneas Inter</h2>
        </div>
      </a>
      <div id="popup_inter" class="popup--transporte">
        <div class="popup--transporte__body">
          <h2>Mapa a tiempo real de autobúses interurbanos</h2>
          <br />
          <br />
          <a class="popup--transporte__close" href="#choose__transport">
            &times;
          </a>
          <div class="popup--transporte__content">
            <iframe
              title="interurbano"
              src="https://crtm.maps.arcgis.com/apps/Embed/index.html?webmap=f3176125b9de4d6f9ed9a867284f544f&extent=-5.7391,39.4841,-1.6824,41.239&home=true&zoom=true&scale=true&search=true&searchextent=true&legend=true&basemap_gallery=true&disable_scroll=false&theme=light"
              width="600vw"
              height="350vh"
              style= {{border:0}}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
