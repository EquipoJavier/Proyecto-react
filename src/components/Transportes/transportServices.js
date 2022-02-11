import { useState, useEffect } from "react";

export default function GetTransportes(url){
    const [pageEndPoint, setPageEndPoint] = useState([]);
    const [done, setDone] = useState(false);

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
    },[]);
    return [pageEndPoint, setPageEndPoint, done, setDone];
}
