import { Outlet, Link } from "react-router-dom";
import UpButton from "./UpButton/UpButton";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function App() {
  return (
    <div>
      <nav>
        <Link to="/transportes">Transportes</Link>
      </nav>
      <nav>
        <Link to="/ocio">Ocio</Link>
      </nav>
      <nav>
        <Link to="/gastronomia">Gastronomia</Link>
      </nav>
      <Header />
      <Outlet />
      <UpButton />
      <Footer />
    </div>
  );
}

export default App;
