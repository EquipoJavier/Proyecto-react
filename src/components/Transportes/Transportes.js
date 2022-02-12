import ChooseTransport from "./ChooseTransport/ChooseTransport";
import SectionLocation from "./Section_Location/SectionLocation";
import SectionTransportVoucher from "./TransportVoucher/SectionTransportVoucher";
import VoucherCrud from "./CRUD_Voucher/VoucherCrud";
import { useOutletContext } from "react-router-dom";
import GetTransportes from "./transportServices";

export default function Transportes(){

    const url = "http://localhost:3001/transportes";
    
    const [pageEndPoint, setPageEndPoint, done, setDone] = GetTransportes(url);

    const [isLogin, setShowLogin, ...tail] = useOutletContext();
    
    return(
        <>
            <SectionLocation done={done} pageEndPoint={pageEndPoint} />
            <SectionTransportVoucher />
            <ChooseTransport done={done} pageEndPoint={pageEndPoint} />
            <VoucherCrud isLogin={isLogin} setShowLogin={setShowLogin} />
        </>
    )
}