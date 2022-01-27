import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import UpButton from "./UpButton/UpButton";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";

function App() {
  const [headerTitle, setHeaderTitle] = useState(
    sessionStorage.getItem("title") != null
      ? sessionStorage.getItem("title")
      : "Madrid"
  );
  const [headerSubtitle, setHeaderSubtitle] = useState(
    sessionStorage.getItem("subtitle") != null
      ? sessionStorage.getItem("subtitle")
      : "Descubre todos sus secretos"
  );
  const [items, setItems] = useState([]);
  const [done, setDone] = useState(false);

  function getHeading(title, subtitle) {
    setHeaderTitle(title);
    sessionStorage.setItem("title", title);
    setHeaderSubtitle(subtitle);
    sessionStorage.setItem("subtitle", subtitle);
  }

  const pathname = useLocation().pathname;
  const url = `http://localhost:3001${pathname === "/" ? "/index" : pathname}`;

  useEffect(() => {
    fetch(url)
      .then((result) => result.json())
      .then((items) => {
        setItems(items);
        setDone(true);
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  }, [url]);

  if (done) {
    var pageEndPoint = items.map((item) => {
      return item;
    });
  }

  return (
    <div>
      <Header title={headerTitle} subtitle={headerSubtitle} />
      <Menu getHeading={getHeading} />
      <Outlet context={[done, pageEndPoint]} />
      <UpButton />
      <Footer />
    </div>
  );
}

export default App;
