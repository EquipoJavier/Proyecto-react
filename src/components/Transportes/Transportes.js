import { useState } from "react";
import ChooseTransport from "./ChooseTransport/ChooseTransport";
import SectionLocation from "./Section_Location/SectionLocation";
import SectionTransportVoucher from "./TransportVoucher/SectionTransportVoucher";
import VoucherCrud from "./CRUD_Voucher/VoucherCrud";
import HiddenCrud from "./Hidden_CRUD/HiddenCrud";
import useSemiPersistentState from "./CRUD_Voucher/useSemiPersistentState.js";
import profileDefault from "../Recursos/img/transport-profile.png";
import "./Transportes.scss";

export default function Transportes(){
    const [create, setCreate] = useState(localStorage.getItem("name") !== null && localStorage.getItem("img") !== null && localStorage.getItem("surname") !== null);
    const [name, setName] = useSemiPersistentState("name", localStorage.getItem("name") !== null ? localStorage.getItem("name") : "");
    const [surname, setSurName] = useSemiPersistentState("surname", localStorage.getItem("surname") !== null ? localStorage.getItem("surname") : "");
    const [fileInput, setFileInput] = useSemiPersistentState("img", localStorage.getItem("img") !== null ? localStorage.getItem("img") : profileDefault);

    return(
        <>
            <SectionLocation />
            <SectionTransportVoucher />
            <ChooseTransport />
            <VoucherCrud name={name} setName={setName} setCreate={setCreate} surname={surname} setSurName={setSurName} setFileInput={setFileInput}/>
            <HiddenCrud name={name} surname={surname} fileInput={fileInput} visibility={!create ? "hidden" : "visible"} />
        </>
    )
}