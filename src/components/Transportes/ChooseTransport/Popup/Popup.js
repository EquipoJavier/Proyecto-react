import metro from "../../../Recursos/img/metropopup.jpg";
import "./Popup.scss";

export default function Popup({ info, show, setShow }) {
  return (
    <div className={ show ? "popup_transportes": "hidden"}>
      <div className="popup_transportes--btn" onClick={() => {
        setShow(false);
        window.onscroll=function(){};
      }}>
        <i className="material-icons">close</i>
      </div>
      <img className="popup_transportes--img" src={metro} alt="" />
      <div className="popup_transportes-aside">
        <h1 className="popup_transportes-aside--h1">Metro de Madrid</h1>
        <aside className="popup_transportes-aside--text">
          <p className="popup_transportes-aside--text-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            voluptatum temporibus tenetur necessitatibus ut aliquid molestiae
            quam earum soluta id, vitae dolorum suscipit dolor fugit, a aperiam,
            consequatur corporis error. Non, sapiente natus nulla consequuntur,
            soluta, sed ipsum pariatur perspiciatis nesciunt vero error iusto
            placeat eum. Nulla deserunt qui ratione? Tenetur placeat voluptatum,
            aspernatur accusantium rerum velit incidunt vero? Velit. Illum nemo,
            sed, earum nesciunt itaque, temporibus facere a accusamus fugiat
            animi vel sint eaque omnis aspernatur. Aliquid ipsa consequuntur
            quam quos optio porro, blanditiis voluptas, dolorum ratione, fuga
            dolorem? Optio, vero perferendis natus rerum fugit ducimus eaque et
            consectetur impedit doloremque qui magnam nemo repudiandae
            praesentium nisi dolores nulla, consequuntur modi! Ut, hic tenetur
            voluptas optio dolor sint perferendis.
          </p>
          <p className="popup_transportes-aside--text-p">
            Ut, hic tenetur voluptas optio dolor sint perferendis. Beatae
            incidunt consequuntur enim libero optio totam reiciendis molestiae
            aperiam assumenda, perferendis veniam harum maiores odit ipsam. Sed,
            dolor quibusdam optio deleniti, ab libero labore aspernatur
            molestiae omnis, fuga blanditiis. Eligendi maiores dolores
            aspernatur voluptatem veritatis quasi aliquid velit, nam nihil
            ratione saepe exercitationem doloribus, ea neque. Deserunt
            praesentium placeat, optio aut excepturi blanditiis reiciendis ab
            veritatis dicta eius dolorem. Perspiciatis similique inventore omnis
            ipsa dicta temporibus culpa? Sed alias dignissimos nam mollitia, sit
            repellat amet expedita maxime delectus magni provident iure nesciunt
            at earum quidem ratione?
          </p>
        </aside>
      </div>
    </div>
  );
}
