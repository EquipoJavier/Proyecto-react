import ChooseTransport from "./ChooseTransport/ChooseTransport";
import SectionAllTransports from "./SectionAllTransports/SectionAllTransports";
import SectionLocation from "./Section_Location/SectionLocation";
import SectionTransportVoucher from "./TransportVoucher/SectionTransportVoucher";
import "./Transportes.scss";

export default function Transportes(){

    return(
        <>
            <SectionLocation />
            <SectionTransportVoucher />
            <SectionAllTransports />
            <ChooseTransport />
        </>
    )
}