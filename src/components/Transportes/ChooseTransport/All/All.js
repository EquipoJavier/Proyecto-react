import Block from "../Block/Block";

export default function All({ setShow }) {
  return (
    <>
      <div className="choose__transport_options-">
        <Block type={"metro"} setShow={setShow} />
        <Block type={"emt"} setShow={setShow} />
        <Block type={"inter"} setShow={setShow} />
        </div>
      <div className="choose__transport_options-">
        <Block type={"ligero"} setShow={setShow} />
        <Block type={"cercanias"} setShow={setShow} />
      </div>
    </>
  );
}
