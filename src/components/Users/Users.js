import { useState, useEffect } from "react";
import axios from "axios";
import md5 from "js-md5";
import Cookies from "universal-cookie";
import './Users.scss';
import buttonCerrar from '../Recursos/img/cerrar.png';

const url = "http://localhost:3001/users";
const cookies = new Cookies();

export default function Users({setIsLogin, setShowLogin}) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  // useEffect(() => {
  //   cookies.get("username") && localStorage.setItem("username", cookies.get("username"));
  // }, [cookies]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  

  async function iniciarSesion() {
    await axios.get(url +"?" + "username=" + form.username + "&password=" + md5(form.password))
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          var respuesta = response[0];
          cookies.set("id", respuesta.id, { path: "/" });
          cookies.set("username", respuesta.username, { path: "/" });
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
  };

  async function registrarse(){
    const post={
      'username':form.username,
      'password':md5(form.password)
    }
    if(form.username!=""&&form.password!=""){
    await axios.post(url,post).then((response)=>
    {console.log(response.data);
     
      alert('Gracias por registrarte');
      setShowLogin(false);
      window.onscroll = function () {};
    })
   
    .catch((error)=>{
      console.log(error);
    });
    }else{
      alert("Necesitas introducir los datos");
    }
  };

  return (
    <div className="container">
      <div className="container--popup">
          <img className="container--popup-cruz" src={buttonCerrar} onClick={()=>{
            setShowLogin(false); 
            window.onscroll = function () {};}} alt="" />
        <div className="container--popup--form">
          <h2  className="container--popup--form-title">¡Bienvenido!</h2>
          <br />
          
          <input
            type="text"
            className="container--popup--form-data icono-placeholder"
            name="username"
            onChange={handleChange} placeholder='&nbsp; &#xf007; Usuario'
        ></input>
          <br />
          <br />
          <input
            type="password"
            className="container--popup--form-data "
            name="password"
            onChange={handleChange} placeholder='&nbsp; &#xf084; Contraseña'
          />
          <br />
          <div className="btn--popup"> 

          <button
            className="btn--popup-login"
            onClick={iniciarSesion}
          >
            Iniciar Sesión
          </button>
          <button
            className="btn--popup-registro"
            onClick={registrarse}
          >
            Registrarse
          </button>

          </div>
        </div>
      </div>
    </div>
  );
}
