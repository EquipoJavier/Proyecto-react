import FirstVoucher from "./FirstVoucher/FirstVoucher";
import SecondVoucher from "./SecondVoucher/SecondVoucher";
import ThirdVoucher from "./ThirdVoucher/ThirdVoucher";

export default function SectionTransportVoucher() {
  return (
    <section className="section__transportVoucher">
      <h1>Así se desplazan económicamente los madrileños</h1>
      <div className="row--transporte">
        <FirstVoucher />
        <SecondVoucher />
        <ThirdVoucher />
      </div>
    </section>
  )
}
