import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import UpButton from "./UpButton/UpButton";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Users from "./Users/Users";

function App() {
  const [items, setItems] = useState([]);
  const [done, setDone] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(localStorage.getItem("username") ? true : false);
  const [profile, setProfile] = useState(null);

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

  function getHeading(title, subtitle) {
    setHeaderTitle(title);
    sessionStorage.setItem("title", title);
    setHeaderSubtitle(subtitle);
    sessionStorage.setItem("subtitle", subtitle);
  }

  const pathname = useLocation().pathname; 

  const url = "http://localhost:3001/data";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
        setDone(true);
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  }, [url]);

  if (done) {
    var pageEndPoint;
    switch (pathname) {
      case "/":
        pageEndPoint = items.index;
        break;
      case "/ocio":
        pageEndPoint = items.ocio;
        break;
      case "/gastronomia":
        pageEndPoint = items.gastronomia;
        break;
      case "/cultura":
        pageEndPoint = items.cultura;
        break;
      default:
        pageEndPoint = items;
    }
  }

  return (
    <div>
      {showLogin ? <Users setProfile={setProfile} setIsLogin={setIsLogin} isLogin={isLogin} setShowLogin={setShowLogin} /> : <></>}
      <Header
        title={headerTitle}
        subtitle={headerSubtitle}
        setShowLogin={setShowLogin}
        profile={profile}
      />
      <Menu getHeading={getHeading} />
      <Outlet context={[isLogin, setShowLogin, done, pageEndPoint]} />
      <UpButton />
      <Footer />
    </div>
  );
}

export default App;
