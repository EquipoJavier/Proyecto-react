import { useState } from "react";
import ChooseTransport from "./ChooseTransport/ChooseTransport";
import SectionLocation from "./Section_Location/SectionLocation";
import SectionTransportVoucher from "./TransportVoucher/SectionTransportVoucher";
import VoucherCrud from "./CRUD_Voucher/VoucherCrud";
import HiddenCrud from "./Hidden_CRUD/HiddenCrud";
import usePersistentState from "./CRUD_Voucher/usePersistentState.js";
import "./Transportes.scss";

export default function Transportes(){
    const [create, setCreate] = useState(localStorage.getItem("name") === null && localStorage.getItem("img") === null && localStorage.getItem("surname") !== null);
    const [disabled, setDisabled] = useState(true);
    const [name, setName] = usePersistentState("name", localStorage.getItem("name") !== null ? localStorage.getItem("name") : null);
    const [surname, setSurName] = usePersistentState("surname", localStorage.getItem("surname") !== null ? localStorage.getItem("surname") : null);
    const [fileInput, setFileInput] = usePersistentState("img", localStorage.getItem("img") !== null ? localStorage.getItem("img") : null);

    return(
        <>
            <SectionLocation />
            <SectionTransportVoucher />
            <ChooseTransport />
            <VoucherCrud name={name} setName={setName} setCreate={setCreate} surname={surname} setSurName={setSurName} setFileInput={setFileInput} setDisabled={setDisabled} disabled={disabled} />
            <HiddenCrud name={name} surname={surname} fileInput={fileInput} visibility={!create ? "hidden" : "visible"} setCreate={setCreate} setDisabled={setDisabled} />
        </>
    )
}