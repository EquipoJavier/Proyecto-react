import Form from "./Form/Form";
import "./VoucherCrud.scss";
import { useEffect, useReducer, useRef, useState } from "react";
import Read from "./Read/Read";
import Cookies from "universal-cookie";

const cookies = new Cookies();


export default function VoucherCrud({isLogin}) {
  const [showForm, setShowForm] = useState(false);

  // const initialState = {
  //   pageEndPoint : [],
  //   done : false,
  //   load : false
  // };
  

  // const [state, dispatch] = useReducer(reducer, initialState);

  // function reducer(state, action) {
  //   switch (action.type) {
  //     case 'LOAD':
  //       return {
  //         pageEndPoint : [],
  //         done : false,
  //         load : true
  //       };
  //     case 'LOADED':
  //       return {
  //         pageEndPoint : action.payload,
  //         done : true,
  //         load : false
  //       }
  //     default:
  //       throw new Error();
  //   }
  // }

  
  const [pageEndPoint, setPageEndPoint] = useState([]);
  const [done, setDone] = useState(false);

  const url = "http://localhost:3001/tarjetas";
  const user = useRef(cookies.get("username"));

  useEffect(() => {
      fetch(url)
      .then((res) => res.json())
      .then((result) => {
          setTimeout(()=>{
              setPageEndPoint(result);
              setDone(true);
          },1500);
      }).catch(function (error) {
        console.log("Hubo un problema con la petición Fetch:" + error.message);
      });
  },[done]);
  

  useEffect(()=>{
    user.current = cookies.get("username");
  },[cookies]);

  return (
      <div className="voucher" id="voucher">
        <h1 className="voucher--h1" >¡Hola {user.current}! Estas son las tarjetas de tu familia</h1>
        {showForm ? <Form setDone={setDone} user={user.current} setShowForm={setShowForm} /> : <Read setDone={setDone} setShowForm={setShowForm} user={user.current} done={done} pageEndPoint={pageEndPoint} /> }
      </div>
  );
}
