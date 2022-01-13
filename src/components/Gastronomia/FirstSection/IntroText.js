import './IntroText.scss';

export default function IntroText(props) {
    const text = props.introText;
    return (
        <>
            <div className='intro__box'>
                <img className="intro__img" src={props.introImg}/>
                {text}</div>
        </>
    )
}