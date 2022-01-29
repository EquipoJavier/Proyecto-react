export default function Block({type, setShow}) {
    return (
      <>
        <div className={`choose__transport_options--option ${type}`} onClick={() => {
          setShow(true);
        }} >
        </div>
      </>
    );
  }