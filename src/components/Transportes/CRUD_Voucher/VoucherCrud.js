import { useEffect, useState } from "react";
import GetTarjetas from "./voucherServices";
import Form from "./Form/Form";
import Read from "./Read/Read";
import "./VoucherCrud.scss";

export default function VoucherCrud({ isLogin, setShowLogin }) {
  const [showForm, setShowForm] = useState(false);
  const [forUpdate, setForUpdate] = useState({});
  const [user,setUser] = useState(localStorage.getItem("username")||null);

  const url = "http://localhost:3001/tarjetas";

  const [pageEndPoint, setPageEndPoint, done, setDone] = GetTarjetas(url);

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
            <Form url={url} forUpdate={forUpdate} setForUpdate={setForUpdate} setDone={setDone} user={user} setShowForm={setShowForm}
            />
          ) : (
            <Read url={url} setDone={setDone} setShowForm={setShowForm} user={user} done={done} pageEndPoint={pageEndPoint} setForUpdate={setForUpdate} setPageEndPoint={setPageEndPoint} setShowLogin={setShowLogin}
            />
          )}
        </>
      ) : (
        <h1 onClick={()=>setShowLogin(true)} style={{textAlign: "center", cursor:"pointer"}}>Por favor, pulse este texto para regístrate o inicia sesión y así crear tus tarjetas</h1>
      )}
    </div>
  );
}
