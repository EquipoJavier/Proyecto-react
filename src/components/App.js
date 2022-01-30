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

  const pathname = useLocation().pathname; //obtengo la ruta acutal p.ejem("/transportes")
  const url = `http://localhost:3001${pathname === "/" ? "/index" : pathname}`; 
  //le indico la ruta con el recurso a solicitar y en el caso de que pathname hubiera sido "/" (referido a index), a la url le paso /index



  //Se corre este efecto cada vez que cambie la url (es decir, queramos solicitar otro recurso)
  useEffect(() => {
    //con fecth obtenemos el contenido de ese recurso p.ejem("http://localhost:3001/transportes")
    fetch(url)
    //si hemos conseguid obtenerlo devolvemos una promesa que se resuelve con el resultado como JSON
      .then((result) => result.json())
      //despues al recibir el json lo añadimos en el estado de items y cambiamos done a true para saber que hemos recibido los datos
      .then((items) => {
        // console.log(items, "bbb");
        setItems(items);
        setDone(true);
      })
      //en el caso de no recibirlo capturamos el error para no cortar la ejecución de la aplicación y mostramos el contenido del error en consola
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  }, [url]);

  //si se ha obtenido el resultado (done === true) entonces nos pasa el endpoint correspondiente a la página en la que te encuentras acutalmente (en este caso el endpoint sería "transportes")
  if (done && pathname !== "/visita") {
    var pageEndPoint = items.map((item) => {
      return item;
    });
  }

  return (
    <div>
      <Header title={headerTitle} subtitle={headerSubtitle} />
      <Menu getHeading={getHeading} />
      {/* Pasamos a Outlet (el contenido a mostrar en la página) una propiedad de react router que se llama context en la que pasamos el estado de done y el endpoint, de esta manera el componente que lleve su contenido a mostrar tendrá automáticamente sus propios datos sin tener que preocuparse si serán los de otro path/recurso */}
      <Outlet context={[done, pageEndPoint]} />
      <UpButton />
      <Footer />
    </div>
  );
}

export default App;
