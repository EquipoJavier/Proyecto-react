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
  // const url = `http://localhost:3001${pathname === "/" ? "/index" : pathname}`;   //le indico la ruta con el recurso a solicitar y en el caso de que pathname hubiera sido "/" (referido a index), a la url le paso /index
  const urlData = "http://localhost:3001/data"; // la URL del recurso (json) que se va a obtener
  const urlVisita = "http://localhost:3001/visita"; // La URL del recurso de "visita" (CRUD planning)


  //Se corre este efecto cada vez que cambie la url (es decir, queramos solicitar otro recurso)
  useEffect(() => {
    Promise.all([ // Al hacer más de una solicitud fetch, hay que meterlas en una promesa para que se hagan a la vez
      fetch(urlData) // con fecth obtenemos el recurso de la URL indicada
        .then(res => res.json()), // si hemos conseguid obtenerlo devolvemos una promesa que se resuelve con el resultado como JSON
      fetch(urlVisita)
        .then(res => res.json())
    ]).then(result => { // Al terminar la promesa que envuelve a los fetch, se fija el array obtenido como el nuevo estado de "items", y se cambia "done" a true para indicar que los datos se han recibido.
      setItems(result);
      setDone(true);
    }).catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
    });
  }, [urlData]);

  
  if (done) { //si se ha obtenido el resultado (done === true) entonces nos pasa el endpoint correspondiente a la página en la que te encuentras acutalmente (indicado por la variable "pathname", por ejemplo /transportes)
    var pageEndPoint;
    switch (pathname) {
      case "/":
        pageEndPoint = items[0].index;
        break;
      case "/transportes":
        pageEndPoint = items[0].transportes;
        break;
      case "/ocio":
        pageEndPoint = items[0].ocio;
        break;
      case "/gastronomia":
        pageEndPoint = items[0].gastronomia;
        break;
      case "/cultura":
        pageEndPoint = items[0].cultura;
        break;
      case "/visita":
        pageEndPoint = items;
        break;
      default:
        throw new Error("Error al recuperar datos externos")
    }
  }

  return (
    <div>
      <Header title={headerTitle} subtitle={headerSubtitle} />
      <Menu getHeading={getHeading} />
      {/* Pasamos a Outlet (el contenido a mostrar en la página) una propiedad de react router que se llama context en la que pasamos el estado de done y el endpoint, de esta manera el componente que lleve su contenido a mostrar tendrá automáticamente sus propios datos sin tener que preocuparse si serán los de otro path/recurso */}
      {/* <Outlet /> */}
      <Outlet context={[done, pageEndPoint]} />
      <UpButton />
      <Footer />
    </div>
  );
}

export default App;
