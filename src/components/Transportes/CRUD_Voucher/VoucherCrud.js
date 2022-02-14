import { useEffect, useState } from "react";
import GetTarjetas from "./voucherServices";
import Form from "./Form/Form";
import Read from "./Read/Read";
import "./VoucherCrud.scss";
import "../../Users/Users.scss";

export default function VoucherCrud({ isLogin, setShowLogin }) {
  const [showForm, setShowForm] = useState(false);
  const [forUpdate, setForUpdate] = useState({});
  const [user, setUser] = useState(localStorage.getItem("username") || null);

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
            <Form
              url={url}
              forUpdate={forUpdate}
              setForUpdate={setForUpdate}
              setDone={setDone}
              user={user}
              setShowForm={setShowForm}
            />
          ) : (
            <Read
              loading={!done}
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
        <button
          className="btn--popup-login voucher--btn"
          onClick={() => setShowLogin(true)}
        >
          Por favor, pulse aqui para regístrase o iniciar sesión y así poder
          crear sus tarjetas
        </button>
      )}
    </div>
  );
}
