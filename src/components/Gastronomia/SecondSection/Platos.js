import Popup from '../../Popup/Popup';
import './Platos.scss';

export default function Platos(title) {
    return (
        <div className="platos">
            <div className="platos__titulo">
                <span className="platos__titulo--heading">{title.title}</span>
            </div>

            <Popup />
        </div>
    )
}