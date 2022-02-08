import { useState, useEffect } from "react";
import ChooseTransport from "./ChooseTransport/ChooseTransport";
import SectionLocation from "./Section_Location/SectionLocation";
import SectionTransportVoucher from "./TransportVoucher/SectionTransportVoucher";
import VoucherCrud from "./CRUD_Voucher/VoucherCrud";
import "./Transportes.scss";
import { useOutletContext } from "react-router-dom";

export default function Transportes(){

    const url = "http://localhost:3001/transportes";
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

    const [isLogin, ...tail] = useOutletContext();
    
    return(
        <>
            <SectionLocation done={done} pageEndPoint={pageEndPoint} />
            <SectionTransportVoucher />
            <ChooseTransport done={done} pageEndPoint={pageEndPoint} />
            <VoucherCrud isLogin={isLogin} done={done} pageEndPoint={pageEndPoint} />
        </>
    )
}