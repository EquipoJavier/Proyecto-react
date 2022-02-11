import { useState, useEffect } from "react";

export default function GetTarjetas(url){
    const [pageEndPoint, setPageEndPoint] = useState([]);
    const [done, setDone] = useState(false);

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
    return [pageEndPoint, setPageEndPoint, done, setDone];
}
