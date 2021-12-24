import HeaderOcio from "./HeaderOcio/HeaderOcio";
import Menu from "../Menu/Menu";
import "./Ocio.scss";
import FirstSection from "./FirstSection/FirstSection";

export default function Ocio() {
    return (
        <div>
        <HeaderOcio/>
        <Menu/>
        <FirstSection/>
        </div>
    )
}