import Cercanias from "./Cercanias/Cercanias";
import Emt from "./Emt/Emt";
import Interurbano from "./Interurbano/Interurbano";
import Ligero from "./Ligero/Ligero";
import Metro from "./Metro/Metro";
import "./ChooseTransport.scss";
import Popup from "./Popup/Popup";

export default function ChooseTransport() {

  return (
    <section className="choose__transport" id="choose__transport">
      <h1>¡Elige tu transporte e infórmate!</h1>
      <div className="choose__transport_options" >
        <Metro />
        <Emt />
        <Interurbano />
        <Ligero />
        <Cercanias />

        <Popup />
      </div>
    </section>
  );
}
