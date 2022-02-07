import { useState, useEffect } from "react";
import axios from "axios";
import md5 from "md5";
import Cookies from "universal-cookie";

const url = "http://localhost:3001/users";
const cookies = new Cookies();

export default function Users() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    cookies.get("username") && localStorage.setItem("username", cookies.get("username"));
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function iniciarSesion() {
    await axios.get(url +"?" + "username=" + form.username + "&password=" + form.password)
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          var respuesta = response[0];
          cookies.set("id", respuesta.id, { path: "/" });
          cookies.set("username", respuesta.username, { path: "/" });
          alert(`Bienvenido ${respuesta.username}`);
        } else {
          alert("El usuario o la contraseña no son correctos");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="containerPrincipal">
      <div className="containerSecundario">
        <div className="form-group">
          <label>Usuario: </label>
          <br />
          <input
            type="text"
            className="form-control"
            name="username"
            onChange={handleChange}
          />
          <br />
          <label>Contraseña: </label>
          <br />
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
          />
          <br />
          <button
            className="btn btn-primary"
            onClick={iniciarSesion}
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}
