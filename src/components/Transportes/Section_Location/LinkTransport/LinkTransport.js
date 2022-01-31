import loading from "../../../Recursos/img/loading.gif";

/* he refactorizado el método de uso de la api: al eliminar arrays/objetos intermedios
  te puedes ahorrar maps y hacer más claro el código*/

export default function LinkTransport({ done, pageEndPoint }) {
  return (
    <div className="section__location--flex-item">
      <ul className="section__location--flex-item--ul flex-1">
        {done ? (
          pageEndPoint.first.map(function(item) {
            return (
              <li key={item.id} className="section__location--flex-item--ul">
                <p>
                  <b>{item.name}</b>{item.text}<a href={item.link} style={{textDecoration: "none"}} >Accede a la web del Metro de Madrid</a>
                </p>
              </li>
            );
          })
          /*
          pageEndPoint.map((ob) => {
            return ob.first.map(function (item) {
              return (
                <li key={item.id} className="section__location--flex-item--ul">
                  <p>
                    <b>{item.name}</b>{item.text}<a href={item.link} style={{textDecoration: "none"}} >Accede a la web del Metro de Madrid</a>
                  </p>
                </li>
              );
            });
          })
          */
        ) : (
          <img style={{
            width: "70px"
          }} src={loading} alt="Loading..." />
        )}
      </ul>
    </div>
  );
}
