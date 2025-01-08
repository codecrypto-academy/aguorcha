import data from "../data.json";

function CardPrice({ data }) {
  return (
    <div className="card w-100 m-1">
      <div className="card-header">
        <h4 className="text-center">{data.titulo}</h4>
      </div>
      <div className="card-body">
        <ul className="list-unstyled">
          {data.features.map((i, index) => (
            <li key={index} className="mt-1">
              {i}
            </li>
          ))}
        </ul>
        <button className="btn btn-lg btn-outline-primary w-100">
          {data.textBoton}
        </button>
      </div>
    </div>
  );
}

export function Prices() {
  return (
    <div className="my-4 d-flex justify-content-between">
      {data.precios.map((i, index) => (
        <CardPrice data={i} key={index}></CardPrice>
      ))}
    </div>
  );
}
