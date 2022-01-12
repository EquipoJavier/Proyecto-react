import Elige from "../../../Recursos/img/elige_tu_transporte_publico.gif";
import Metro from "../../../Recursos/img/metro_xl.gif";
import Emt from "../../../Recursos/img/emt_xl.gif";
import Inter from "../../../Recursos/img/interurbanos_cm_xl.gif";
import Ligero from "../../../Recursos/img/metroligero_xl.gif";
import Cercanias from "../../../Recursos/img/cercanias_xl.gif";

export default function ListTransport() {
  return (
    <div className="col-1-of-2">
      <ul className="section__location--ul">
        <img
          className="section__location--ul-subtitle"
          src={Elige}
          alt=""
        />
        
          <li className="section__location--ul-icon">
            <img src={Metro} alt="" />
          </li>
        
          <li className="section__location--ul-icon">
            <img src={Emt} alt="" />
          </li>
        
          <li className="section__location--ul-icon">
            <img src={Inter} alt="" />
          </li>
        
          <li className="section__location--ul-icon">
            <img src={Ligero} alt="" />
          </li>
        
          <li className="section__location--ul-icon">
            <img src={Cercanias} alt="" />
          </li>
      </ul>
    </div>
  );
}
