import { Outlet, Link } from "react-router-dom";
import Header from "./Header/Header";
import UpButton from "./UpButton/UpButton";
import Footer from "./Footer/Footer";


function App() {

  return (
    <div>
      <Header />
      
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <UpButton />
      <Footer />
      <Outlet />
    </div>
  )
}

export default App;
