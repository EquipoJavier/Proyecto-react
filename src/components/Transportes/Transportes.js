import { useState } from "react";
import ChooseTransport from "./ChooseTransport/ChooseTransport";
import SectionLocation from "./Section_Location/SectionLocation";
import SectionTransportVoucher from "./TransportVoucher/SectionTransportVoucher";
import VoucherCrud from "./CRUD_Voucher/VoucherCrud";
import HiddenCrud from "./Hidden_CRUD/HiddenCrud";
import usePersistentState from "./CRUD_Voucher/usePersistentState.js";
import "./Transportes.scss";
import { useOutletContext } from "react-router-dom";

export default function Transportes(){
    const [create, setCreate] = useState(localStorage.getItem("name") === null && localStorage.getItem("img") === null && localStorage.getItem("surname") !== null);
    const [disabled, setDisabled] = useState(true);
    const [name, setName] = usePersistentState("name", localStorage.getItem("name") ? localStorage.getItem("name") : null);
    const [surname, setSurName] = usePersistentState("surname", localStorage.getItem("surname") ? localStorage.getItem("surname") : null);
    const [fileInput, setFileInput] = usePersistentState("img", localStorage.getItem("img") ? localStorage.getItem("img") : null);
    const [type, setType] = usePersistentState("type", localStorage.getItem("type") ? localStorage.getItem("type") : null);


    //con el método useOutletContext() obtenemos los valores pasados en el context a Outlet anteriormente en App
    const [done , pageEndPoint] = useOutletContext();
    
    return(
        <>
            <SectionLocation done={done} pageEndPoint={pageEndPoint} />
            <SectionTransportVoucher />
            <ChooseTransport />
            <VoucherCrud setType={setType} name={name} setName={setName} setCreate={setCreate} surname={surname} setSurName={setSurName} setFileInput={setFileInput} setDisabled={setDisabled} disabled={disabled} />
            <HiddenCrud  type={type} name={name} surname={surname} fileInput={fileInput} visibility={!create ? "hidden" : "visible"} setCreate={setCreate} setDisabled={setDisabled} />
        </>
    )
}