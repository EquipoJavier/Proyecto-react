import { useState, useEffect } from "react";

export default function GetTarjetas(url){
    const [pageEndPointTransportes, setPageEndPointTransportes] = useState([]);
    const [doneTransportes, setDoneTransportes] = useState(false);

    useEffect(async () => {
        if(doneTransportes){
          return
        } else {
        fetch(url)
          .then((res) => res.json())
          .then((result) => {
            setTimeout(() => {
              setPageEndPointTransportes(result);
              setDoneTransportes(true);
            }, 1500);
          })
          .catch(function (error) {
            console.log("Hubo un problema con la petición Fetch:" + error.message);
          });
        }
      }, [doneTransportes]);
    return [pageEndPointTransportes, setPageEndPointTransportes, doneTransportes, setDoneTransportes];
}
