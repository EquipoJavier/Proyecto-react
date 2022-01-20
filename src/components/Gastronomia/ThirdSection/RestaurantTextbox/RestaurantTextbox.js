import './RestaurantTextbox.scss';

export default function RestaurantTextbox({restaurant, imgOnRight}) {

    if (imgOnRight) {
        return (
            <div className="resTextbox">
                <div className="resTextbox__text">
                    <span className="resTextbox__text--title"></span>
                    <div className="resTextbox__text--descr">

                    </div>
                </div>
                <div className="resTextbox__img">
                    <img src={restaurant.img} alt={restaurant.name}/>
                </div>
            </div>
        )
    } else {
        return (
            <div className="resTextbox">
                <div className="resTextbox__img">

                </div>
                <div className="resTextbox__text">
                    <span className="resTextbox__text--title"></span>
                    <div className="resTextbox__text--descr">
    
                    </div>
                </div>
            </div>
        )
    }
    
}