import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export function Producto() {
  const params = useParams();

  const { data, isLoading } = useQuery("producto", () => {
    return fetch(`http://localhost:5555/products/${params.id}`).then((res) =>
      res.json()
    );
  });
  if (isLoading) {
    return <div>Cargando...</div>;
  }
  return (
    <div>
      <h3>Producto</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <td>{data[0].ProductID}</td>
          </tr>
          <tr>
            <th>Nombre</th>
            <td>{data[0].ProductName}</td>
          </tr>
          <tr>
            <th>Precio</th>
            <td>{data[0].UnitPrice}</td>
          </tr>
        </thead>
      </table>
    </div>
  );
}
