import ChooseTransport from "./ChooseTransport/ChooseTransport";
import SectionAllTransports from "./SectionAllTransports/SectionAllTransports";
import SectionLocation from "./Section_Location/SectionLocation";
import "./Transportes.scss";
import SectionTransportVoucher from "./TransportVoucher/SectionTransportVoucher";

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