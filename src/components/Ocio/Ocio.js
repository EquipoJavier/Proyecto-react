import HeaderOcio from "./HeaderOcio/HeaderOcio";
import Menu from "../Menu/Menu";
import "./Ocio.scss";
import FirstSection from "./FirstSection/FirstSection";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import FourthSection from "./FourthSection/FourthSection";

export default function Ocio() {
    return (
        <>
        <HeaderOcio/>
        <Menu/>
        <FirstSection/>
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        </>
    )
}