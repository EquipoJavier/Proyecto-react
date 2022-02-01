import "./ChooseTransport.scss";
import All from "./All/All";
import { useState } from "react";

export default function ChooseTransport({ done, pageEndPoint }) {
  const [show, setShow] = useState(false);

  return (
    <section className="choose__transport" id="choose__transport">
      <h1>¡Elige tu transporte e infórmate!</h1>
      <div className="choose__transport_options">
        <All done={done} pageEndPoint={pageEndPoint}  show={show} setShow={setShow} />
      </div>
    </section>
  );
}
