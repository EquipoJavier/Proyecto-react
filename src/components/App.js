import { Outlet, Link } from "react-router-dom";
import UpButton from "./UpButton/UpButton";
import Footer from "./Footer/Footer";


function App() {

  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/ocio">Ocio</Link>
      </nav>
      <Outlet />
      <UpButton />
      <Footer />
      
    </div>
  )
}

export default App;
