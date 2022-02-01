import metro from "../../../Recursos/img/metro_xl.gif";
import emt from "../../../Recursos/img/emt_xl.gif";
import inter from "../../../Recursos/img/interurbanos_cm_xl.gif";
import ligero from "../../../Recursos/img/metroligero_xl.gif";
import cercanias from "../../../Recursos/img/cercanias_xl.gif";
import loading from "../../../Recursos/img/loading.gif";
import "./Popup.scss";


export default function Popup({ popupInfo, done, types, show, setShow }) {

  
  if(done){
    var info = popupInfo[types];
  }

  return (
    <div className={ show ? "popup_transportes": "hidden"}>
      <div className="popup_transportes--btn" onClick={() => {
        setShow(false);
        window.onscroll=function(){};
      }}>
        <i className="material-icons">close</i>
      </div>
      <div className="popup_transportes--options" >
        <img src={metro} alt="" />
        <img src={emt} alt="" />
        <img src={inter} alt="" />
        <img src={ligero} alt="" />
        <img src={cercanias} alt="" />
      </div>

      { info ? <><div className="popup_transportes-aside">
        <h1 className="popup_transportes-aside--h1">{info.name}</h1>
        <aside className="popup_transportes-aside--text">
          <p className="popup_transportes-aside--text-p">
            {info.text}
          </p>
        </aside>
      </div></> 
      : 
      (
        <img style={{
          width: "70px"
        }} src={loading} alt="Loading..." />
      )
      }
      
    </div>
  );
}
