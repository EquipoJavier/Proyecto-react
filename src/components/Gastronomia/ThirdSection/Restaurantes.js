import './Restaurantes.scss';

export default function Restaurantes(props) {
    return (
        <div className="restaurantes">
            <div className="restaurantes__titulo">
                <span className="restaurantes__titulo--heading">{props.title}</span>
            </div>
        </div>
    )
}