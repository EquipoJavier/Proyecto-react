import Form from "./Form/Form";
import "./VoucherCrud.scss";
import { useEffect, useState } from "react";
import Read from "./Read/Read";


export default function VoucherCrud({ isLogin, setShowLogin }) {
  const [showForm, setShowForm] = useState(false);
  const [pageEndPoint, setPageEndPoint] = useState([]);
  const [done, setDone] = useState(false);
  const [forUpdate, setForUpdate] = useState([]);

  const url = "http://localhost:3001/tarjetas";
  const [user,setUser] = useState(localStorage.getItem("username")||null);

  useEffect(async () => {
    if(done){
      return
    } else {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setTimeout(() => {
          setPageEndPoint(result);
          setDone(true);
        }, 1500);
      })
      .catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
    }
  }, [done]);

  useEffect(() => {
    setUser(localStorage.getItem("username"));
  }, [isLogin]);

  return (
    <div className="voucher" id="voucher">
      {isLogin ? (
        <>
          <h1 className="voucher--h1">
            ¡Hola {user}! Estas son las tarjetas de tu familia
          </h1>
          {showForm ? (
            <Form
              url={url}
              forUpdate={forUpdate}
              setForUpdate={setForUpdate}
              setDone={setDone}
              user={user.current}
              setShowForm={setShowForm}
            />
          ) : (
            <Read
              url={url}
              setDone={setDone}
              setShowForm={setShowForm}
              user={user}
              done={done}
              pageEndPoint={pageEndPoint}
              setForUpdate={setForUpdate}
              setPageEndPoint={setPageEndPoint}
              setShowLogin={setShowLogin}
            />
          )}
        </>
      ) : (
        <h1 onClick={()=>setShowLogin(true)} style={{textAlign: "center", cursor:"pointer"}}>Por favor, pulse este texto para regístrate o inicia sesión y así crear tus tarjetas</h1>
      )}
    </div>
  );
}
