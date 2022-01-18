import { Link, useLocation } from "react-router-dom";
import "./Menu.scss";

export default function Menu(props) {
  const getHeading = props.getHeading;

  const location = useLocation();

  return (
      <nav className="menu">
        <ul className="menu__list">
          <li className={location.pathname === "/" ? "menu__item index" : 'menu__item' }>
              <Link to="/" onClick={function() {
                getHeading("Madrid", "Descubre todos sus secretos");
              }}>Index</Link>
          </li>
          <li className={location.pathname === "/transportes" ? " menu__item transportes" : 'menu__item' }>
              <Link to="/transportes" onClick={function() {
                getHeading("Transportes", "");
              }}>Transportes</Link>
          </li>
          <li className={location.pathname === "/ocio" ? " menu__item ocio" : 'menu__item' }>
              <Link to="/ocio" onClick={function() {
                getHeading("Ocio", "");
              }}>Ocio</Link>
          </li>
          <li className={location.pathname === "/gastronomia" ? " menu__item gastronomia" : 'menu__item' }>
              <Link to="/gastronomia" onClick={function() {
                getHeading("Gastronomia", "Un sabor inigualable");
              }}>Gastronomia</Link>
          </li>
          <li className={location.pathname === "/cultura" ? " menu__item cultura" : 'menu__item' }>
              <Link to="/cultura" onClick={function() {
                getHeading("Cultura", "");
              }}>Cultura</Link>
          </li>
        </ul>
      </nav>
  );
}

