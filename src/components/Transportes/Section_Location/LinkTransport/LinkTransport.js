import loading from "../../../Recursos/img/loading.gif";

export default function LinkTransport({ done, pageEndPoint }) {
  return (
    <div className="section__location--flex-item">
      <ul className="section__location--flex-item--ul flex-1">
        {done ? (
          pageEndPoint.map((ob) => {
            return ob.first.map(function (item) {
              return (
                <li key={item.id} className="section__location--flex-item--ul">
                  <p>
                    <b>{item.name}: </b>{item.text}<a href={item.link} style={{textDecoration: "none"}} >accede a la web de {item.name}</a>
                  </p>
                </li>
              );
            });
          })
        ) : (
          <img style={{
            width: "70px"
          }} src={loading} alt="Loading..." />
        )}
      </ul>
    </div>
  );
}
