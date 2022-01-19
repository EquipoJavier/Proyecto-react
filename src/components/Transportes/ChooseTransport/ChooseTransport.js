import Cercanias from "./Cercanias/Cercanias";
import Emt from "./Emt/Emt";
import Interurbano from "./Interurbano/Interurbano";
import Ligero from "./Ligero/Ligero";
import Metro from "./Metro/Metro";
import "./ChooseTransport.scss";

export default function ChooseTransport(){

    return(
        <section className="choose__transport" id="choose__transport">
            <h1>¡Elige tu transporte e infórmate!</h1>
            <div className="row--transporte choose__transport_options">
                <Metro />
                <Emt />
                <Interurbano />
            </div>
            <div className="row--transporte choose__transport_options">
                <Ligero />
                <Cercanias />       
            </div>        
        </section>
    )
}
