import "./ChooseTransport.scss";
import All from "./All/All";
// import Popup from "./Popup/Popup";

export default function ChooseTransport() {
  return (
    <section className="choose__transport" id="choose__transport">
      <h1>¡Elige tu transporte e infórmate!</h1>
      <div className="choose__transport_options">
        <All />
        {/* <Popup /> */}
      </div>
    </section>
  );
}
