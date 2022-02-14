import { withLoading } from "../../../Loading/withLoading";

function LinkTransport({ pageEndPoint }) {
  return (
    <div className="section__location--flex-item">
      <ul className="section__location--flex-item--ul flex-1">
        {pageEndPoint.location.map(function (item) {
            return (
              <li key={item.id} className="section__location--flex-item--ul">
                <p>
                  <b>{item.name}: </b>
                  {item.text}
                  <a href={item.link} style={{ textDecoration: "none" }}>
                    accede a la web de {item.name}
                  </a>
                </p>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default withLoading(LinkTransport);