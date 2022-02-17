import ChooseTransport from "./ChooseTransport/ChooseTransport";
import SectionLocation from "./Section_Location/SectionLocation";
import SectionTransportVoucher from "./TransportVoucher/SectionTransportVoucher";
import VoucherCrud from "./CRUD_Voucher/VoucherCrud";
import { useOutletContext } from "react-router-dom";
import GetTransportes from "./transportServices";

export default function Transportes(){

    const url = "http://localhost:3001/transportes";
    
    const [isLogin, setShowLogin, done, pageEndPoint,alterPlan] = useOutletContext();

    const [pageEndPointTransportes, setPageEndPointTransportes, doneTransportes, setDoneTransportes] = GetTransportes(url);

    
    return(
        <>
            <SectionLocation doneTransportes={doneTransportes} pageEndPointTransportes={pageEndPointTransportes} />
            <SectionTransportVoucher />
            <ChooseTransport doneTransportes={doneTransportes} pageEndPointTransportes={pageEndPointTransportes} />
            <VoucherCrud isLogin={isLogin} setShowLogin={setShowLogin} />
        </>
    )
}