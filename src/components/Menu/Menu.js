import { Link } from "react-router-dom";
import { useState } from 'react';
import "./Menu.scss";


export default function Menu(props) {
  const getHeading = props.getHeading;
  const [currentUrl, setCurrentUrl] = useState(window.location.pathname);

  console.log(currentUrl);
  return (
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <nav className="menu__item--text">
              <Link to="/" onClick={function() {
                getHeading("Madrid", "Descubre todos sus secretos");
                setCurrentUrl((c) => c = window.location.pathname);
              }}>Index</Link>
            </nav>
          </li>
          <li className="menu__item">
            <nav>
              <Link to="/transportes" onClick={function() {
                getHeading("Transportes", "");
                setCurrentUrl((c) => c = window.location.pathname);
              }}>Transportes</Link>
            </nav>
          </li>
          <li className="menu__item">
            <nav>
              <Link to="/ocio" onClick={function() {
                getHeading("Ocio", "");
                setCurrentUrl((c) => c = window.location.pathname);
              }}>Ocio</Link>
            </nav>
          </li>
          <li className="menu__item">
            <nav>
              <Link to="/gastronomia" onClick={function() {
                getHeading("Gastronomia", "");
                setCurrentUrl((c) => c = window.location.pathname);
              }}>Gastronomia</Link>
            </nav>
          </li>
          <li className="menu__item">
            <nav>
              <Link to="/cultura" onClick={function() {
                getHeading("Cultura", "");
                setCurrentUrl((c) => c = window.location.pathname);
              }}>Cultura</Link>
            </nav>
          </li>
        </ul>
      </nav>
  );
}
