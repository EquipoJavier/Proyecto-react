import Form from "./Form/Form";
import "./VoucherCrud.scss";
import { useEffect, useRef, useState } from "react";
import Read from "./Read/Read";
import Cookies from "universal-cookie";

const cookies = new Cookies();


export default function VoucherCrud({isLogin, done, pageEndPoint }) {
  const [showForm, setShowForm] = useState(false);

  const user = useRef();

  useEffect(()=>{
    user.current = cookies.get("username");
  },[cookies]);

  return (
      <div className="voucher" id="voucher">
        <h1 className="voucher--h1" >¡Crea todas las tarjetas para tu familia!</h1>
        {showForm ? <Form /> : <Read setShowForm={setShowForm} user={user.current} done={done} pageEndPoint={pageEndPoint} /> }
      </div>
  );
}
