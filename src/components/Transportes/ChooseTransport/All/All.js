import Cercanias from "./Cercanias/Cercanias";
import Emt from "./Emt/Emt";
import Interurbano from "./Interurbano/Interurbano";
import Ligero from "./Ligero/Ligero";
import Metro from "./Metro/Metro";

export default function All() {
  return (
    <>
      <div className="choose__transport_options-">
        <Metro />
        <Emt />
        <Interurbano />
      </div>
      <div className="choose__transport_options-">
        <Ligero />
        <Cercanias />
      </div>
    </>
  );
}
