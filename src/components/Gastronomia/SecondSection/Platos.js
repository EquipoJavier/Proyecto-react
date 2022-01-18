import Popup from '../../Popup/Popup';
import './Platos.scss';

export default function Platos(props) {
    return (
        <div className="platos">
            <div className="platos__titulo">
                <span className="platos__titulo--heading">{props.title}</span>
            </div>

            <Popup />
        </div>
    )
}