import BonoDelante from "../../../Recursos/img/bono_maria_delante.jpg";
import BonoDetras from "../../../Recursos/img/bono_maria_detras.jpg";

export default function FirstVoucher(){

    return(
        <div className="col-1-of-3">
                <div className="card--transporte card--transporte-medias">
                    <div className="card--transporte__side card--transporte__side--front">
                        <img src={BonoDelante} alt="" />
                    </div>
                    <div
                        className="card--transporte__side card--transporte__side--back card--transporte__side card--transporte__side--back-1">
                        <img src={BonoDetras} alt="" />
                    </div>
                </div>
            </div>

    )
}