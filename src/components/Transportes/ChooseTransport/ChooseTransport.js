import Cercanias from "./Cercanias/Cercanias";
import Emt from "./Emt/Emt";
import Interurbano from "./Interurbano/Interurbano";
import Ligero from "./Ligero/Ligero";
import Metro from "./Metro/Metro";

export default function ChooseTransport(){

    return(
        <section class="choose__transport" id="choose__transport">
            <h1>¡Elige tu transporte e infórmate!</h1>
            <div class="row--transporte choose__transport_options">
                <Metro />
                <Emt />
                <Interurbano />
            </div>
            <div class="row--transporte choose__transport_options">
                <Ligero />
                <Cercanias />       
            </div>        
        </section>
    )
}
