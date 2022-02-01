import Block from "../Block/Block";
import Popup from "../Popup/Popup";
import { useState } from "react";

export default function All({ done, pageEndPoint, show, setShow }) {

  const [types, setTypes] = useState();
  var popupInfo = [];

  if(done){
    popupInfo = pageEndPoint.choose;
  }

  return (
    <>
      <div className="choose__transport_options-">
        <Block type={"metro"} setShow={setShow} setTypes={setTypes} />
        <Block type={"emt"} setShow={setShow} setTypes={setTypes} />
        <Block type={"inter"} setShow={setShow} setTypes={setTypes} />
        </div>
      <div className="choose__transport_options-">
        <Block type={"ligero"} setShow={setShow} setTypes={setTypes} />
        <Block type={"cercanias"} setShow={setShow} setTypes={setTypes} />
      </div>
      {show ? <Popup popupInfo={popupInfo} done={done} setTypes={setTypes} types={types} show={show} setShow={setShow} /> : <></>}
    </>
  );
}
