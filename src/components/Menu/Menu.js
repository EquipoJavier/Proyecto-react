import "./Menu.scss";
import { Link } from "react-router-dom";

export default function Menu(props) {
  const getHeading = props.getHeading;
  
  return (
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <nav className="menu__item--text">
              <Link to="/" onClick={function() {
                getHeading("Madrid", "Descubre todos sus secretos")
              }}>Index</Link>
            </nav>
          </li>
          <li className="menu__item">
            <nav>
              <Link to="/transportes" onClick={function() {
                getHeading("Transportes", "")
              }}>Transportes</Link>
            </nav>
          </li>
          <li className="menu__item">
            <nav>
              <Link to="/ocio" onClick={function() {
                getHeading("Ocio", "")
              }}>Ocio</Link>
            </nav>
          </li>
          <li className="menu__item">
            <nav>
              <Link to="/gastronomia" onClick={function() {
                getHeading("Gastronomia", "Un sabor inigualable")
              }}>Gastronomia</Link>
            </nav>
          </li>
          <li className="menu__item">
            <nav>
              <Link to="/cultura" onClick={function() {
                getHeading("Cultura", "")
              }}>Cultura</Link>
            </nav>
          </li>
        </ul>
      </nav>
  );
}
