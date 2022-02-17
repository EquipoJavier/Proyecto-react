import "./header.scss";

import Temperatura from "../Temperatura/Temperatura";
import Reloj from "../Reloj/Reloj"

export default function Header(props) {
  const title = props.title;
  const subtitle = props.subtitle;
  return (
    <>
      <header className="header_index">
        <div className="header_index--logo">
          <i className="material-icons header_index--logo-img">account_circle</i>
        </div>
        <Reloj/>
        <Temperatura/>
        <div className="header_index--text-box">
          <h1 className="heading_index-primary">
            <span className="heading_index-primary--main">{title}</span>
            <span className="heading_index-primary--sub">{subtitle}</span>
          </h1>
        </div>
      </header>
    </>
  );
}
