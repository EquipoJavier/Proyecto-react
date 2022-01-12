import { Outlet } from "react-router-dom";
import { useState } from 'react';
import UpButton from "./UpButton/UpButton";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";

function App() {
  const [headerTitle, setHeaderTitle] = useState("Madrid");
  const [headerSubtitle, setHeaderSubtitle] = useState("Descubre todos sus secretos");

  function getHeading (title, subtitle) {
    setHeaderTitle(title);
    setHeaderSubtitle(subtitle);
    console.log(title);
    console.log(subtitle);
  }

  return (
    <div>
      <Menu getHeading={getHeading}/>
      <Header title={headerTitle} subtitle={headerSubtitle} />
      <Outlet />
      <UpButton />
      <Footer />
    </div>
  );
}

export default App;
