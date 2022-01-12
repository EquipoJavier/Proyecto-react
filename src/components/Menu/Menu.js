import "./Menu.scss";
import { Link } from "react-router-dom";

export default function Menu(props) {
  const getHeading = props.getHeading;
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label for="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <nav>
              <Link to="/" onClick={function() {
                getHeading("Madrid", "Descubre todos sus secretos")
              }}>Index</Link>
            </nav>
          </li>
          <li className="navigation__item">
            <nav>
              <Link to="/transportes" onClick={function() {
                getHeading("Transportes", "")
              }}>Transportes</Link>
            </nav>
          </li>
          <li className="navigation__item">
            <nav>
              <Link to="/ocio" onClick={function() {
                getHeading("Ocio", "")
              }}>Ocio</Link>
            </nav>
          </li>
          <li className="navigation__item">
            <nav>
              <Link to="/gastronomia" onClick={function() {
                getHeading("Gastronomia", "")
              }}>Gastronomia</Link>
            </nav>
          </li>
          <li className="navigation__item">
            <nav>
              <Link to="/cultura" onClick={function() {
                getHeading("Cultura", "")
              }}>Cultura</Link>
            </nav>
          </li>
        </ul>
      </nav>
    </div>
  );
}
