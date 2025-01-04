import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

export function Producto() {
  const params = useParams();

  const {data, isLoading} = useQuery("producto", () => {
    return fetch(`http://localhost:5555/products/${params.id}`)
    .then(res => res.json());
  });
  if (isLoading) {
    return <div>Cargando...</div>
  }
  return <p>{JSON.stringify(data)}</p>
}