import { useParams } from "react-router-dom";

export function Balance() {
  const params = useParams();

  return <div>Balance {params.address}</div>;
}
