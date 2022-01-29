import Block from "../Block/Block";

export default function All() {
  return (
    <>
      <div className="choose__transport_options-">
        <Block type={"metro"} />
        <Block type={"emt"} />
        <Block type={"inter"} />
        </div>
      <div className="choose__transport_options-">
        <Block type={"ligero"} />
        <Block type={"cercanias"} />
      </div>
    </>
  );
}
