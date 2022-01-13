import './IntroText.scss';

export default function IntroText(props) {
    const text = props.introText;
    return (
        <>
            <div className='intro__box'>{text}</div>
        </>
    )
}