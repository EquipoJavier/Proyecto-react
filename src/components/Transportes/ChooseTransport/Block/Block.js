import Popup from "../Popup/Popup";
export default function Block({ type, show, setShow }) {
  return (
    <>
      <div
        className={`choose__transport_options--option ${type}`}
        onClick={() => {
          setShow(true);
          var x = window.scrollX;
          var y = window.scrollY;
          window.onscroll = function () {
            window.scrollTo(x, y);
          };
        }}
      ></div>
      {show ? <Popup show={show} setShow={setShow} /> : <></>}
    </>
  );
}
