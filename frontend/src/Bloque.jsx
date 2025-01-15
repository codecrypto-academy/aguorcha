import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getBlock } from "./api";

export function Bloque() {
  const params = useParams();
  const { isLoading, isError, error, data } = useQuery(
    ["bloque", params.bloque],
    () => getBlock(params.bloque)
  );

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }
  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
