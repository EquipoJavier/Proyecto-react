import "./Popup.scss";
import PopupElem from './Popup-elem';

const transports = [
  {
    name: "Metro",
    iframe: (
      <iframe
        title="metro"
        src="https://www.metromadrid.es/sites/default/files/web/planos/Plano_base_cartografica_junio_2020.pdf"
        width="600vw"
        height="350vh"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    ),
  },
  {
    name: "Emt",
    iframe: (
      <iframe
        title="emt"
        src="https://navegapormadrid.emtmadrid.es/app/"
        width="600vw"
        height="350vh"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    ),
  },
  {
    name: "Interurbano",
    iframe: (
      <iframe
        title="interurbano"
        src="https://crtm.maps.arcgis.com/apps/Embed/index.html?webmap=f3176125b9de4d6f9ed9a867284f544f&extent=-5.7391,39.4841,-1.6824,41.239&home=true&zoom=true&scale=true&search=true&searchextent=true&legend=true&basemap_gallery=true&disable_scroll=false&theme=light"
        width="600vw"
        height="350vh"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    ),
  },
  {
    name: "Metro ligero",
    iframe: (
      <iframe
        title="ligero"
        src="https://www.metromadrid.es/sites/default/files/web/planos/MetroLigeroesp.pdf"
        width="600vw"
        height="350vh"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    ),
  },
  {
    name: "Cercanías",
    iframe: (
      <iframe
        title="cercanias"
        src="https://www.crtm.es/media/393460/cercanias.pdf"
        width="600vw"
        height="350vh"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    ),
  },
];

export default function Popup() {
  return (
      <>
          <div className="popup">
              {transports.map(function(transport) {
                  return (
                      <div className="popup__elem" key={transport.name}>
                          <PopupElem transport={transport}/>
                      </div>
                  )
              })}
          </div>
      </>
  )
}