import { useRef, useState } from "react";
import axios from "axios";
import md5 from "js-md5";
import "./Users.scss";
import buttonCerrar from "../Recursos/img/cerrar.png";
import Loading from "../Loading/Loading";

const url = "http://localhost:3001/users";

export default function Users({ setIsLogin, isLogin, setShowLogin }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [areUsers, setAreUsers] = useState(false);
  const [ourUsers, setOurUsers] = useState([]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function logOut() {
    setIsLogin(false);
    localStorage.removeItem("username");
    setShowLogin(false);
    window.onscroll = function () {};
  }

  async function seeUsers() {
    setOurUsers(false);
    await axios
      .get(url)
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          setOurUsers(response.map((usersn) => usersn.username));
          setAreUsers(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }


  async function iniciarSesion() {
    await axios
      .get(
        url +
          "?" +
          "username=" +
          form.username +
          "&password=" +
          md5(form.password)
      )
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          var respuesta = response[0];
          localStorage.setItem("username", respuesta.username);
          alert(`Bienvenido ${respuesta.username}`);
          setShowLogin(false);
          setIsLogin(true);
          window.onscroll = function () {};
        } else {
          alert("El usuario o la contraseña no son correctos");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function registrarse() {
    let post = {
      username: form.username,
      password: md5(form.password),
    };
    seeUsers();
    if(areUsers){
      if(ourUsers.find(user => user === form.username)){ 
        alert("El usuario introducido ya existe");
      } else {
        if (form.username != "" && form.password != "") {
          await axios
            .post(url, post)
            .then((response) => {
              iniciarSesion();
              setShowLogin(false);
              window.onscroll = function () {};
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          alert("Necesitas introducir los datos");
        }
      }
      
    } else {
      <Loading />
    }
  }

  return (
    <div className="container">
      <div className="container--popup">
        <img
          className="container--popup-cruz"
          src={buttonCerrar}
          onClick={() => {
            setShowLogin(false);
            window.onscroll = function () {};
          }}
          alt=""
        />
        <div className="container--popup--form">
          {!isLogin ? (
            <>
              <h2 className="container--popup--form-title">¡Bienvenido!</h2>
              <br />
              <input
                type="text"
                className="container--popup--form-data icono-placeholder"
                name="username"
                onChange={handleChange}
                placeholder="&nbsp; &#xf007; Usuario"
              ></input>
              <br />
              <br />
              <input
                type="password"
                className="container--popup--form-data "
                name="password"
                onChange={handleChange}
                placeholder="&nbsp; &#xf084; Contraseña"
              />
              <br />
              <div className="btn--popup">
                <button className="btn--popup-login" onClick={iniciarSesion}>
                  Iniciar Sesión
                </button>
                <button className="btn--popup-registro" onClick={registrarse}>
                  Registrarse
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="container--popup--form-title">
                ¿Quieres cerrar la sesión?
              </h2>
              <div className="btn--popup">
                <button className="btn--popup-registro" onClick={logOut}>
                  Cerrar sesión
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
