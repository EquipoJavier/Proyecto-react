import rutaVideo from "../Recursos/videos/cultura-parques-video.mp4";

export default function Video() {
    return(
        <div className="cultura-parques-video">
            <video className="cultura-parques-video__content" autoPlay muted loop>
                <source src={rutaVideo} type="video/mp4"></source>
            </video>
        </div>
    )
}