import { Outlet } from "react-router-dom";

export function Home() {
  return (
    <div className="container">
      <h3>Explorador de la Blockchain Ethereum</h3>
      <Outlet />
    </div>
  );
}
