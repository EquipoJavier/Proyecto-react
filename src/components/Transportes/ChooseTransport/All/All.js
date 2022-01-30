import Block from "../Block/Block";

export default function All({ show, setShow }) {
  return (
    <>
      <div className="choose__transport_options-">
        <Block type={"metro"} show={show} setShow={setShow} />
        <Block type={"emt"} show={show} setShow={setShow} />
        <Block type={"inter"} show={show} setShow={setShow} />
        </div>
      <div className="choose__transport_options-">
        <Block type={"ligero"} show={show} setShow={setShow} />
        <Block type={"cercanias"} show={show} setShow={setShow} />
      </div>
    </>
  );
}
