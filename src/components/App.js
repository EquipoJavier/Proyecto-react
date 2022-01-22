import { Outlet } from "react-router-dom";
import { useState } from 'react';
import UpButton from "./UpButton/UpButton";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
// import Api from "./Transportes/Api/Api";

function App() {
  const [headerTitle, setHeaderTitle] = useState(sessionStorage.getItem('title') != null ? sessionStorage.getItem('title') : "Madrid");
  const [headerSubtitle, setHeaderSubtitle] = useState(sessionStorage.getItem('subtitle') != null ? sessionStorage.getItem('subtitle') : "Descubre todos sus secretos");

  function getHeading (title, subtitle) {
    setHeaderTitle(title);
    sessionStorage.setItem('title', title)
    setHeaderSubtitle(subtitle);
    sessionStorage.setItem('subtitle', subtitle);
  }

  return (
    <div>
      {/* <Api /> */}
      <Header title={headerTitle} subtitle={headerSubtitle} />
      <Menu getHeading={getHeading}/>
      <Outlet />
      <UpButton />
      <Footer />
    </div>
  );
}

export default App;
