import { Outlet, Link } from "react-router-dom"

export function Home() {
  return <div className="container">
    <div className="text-end border p-2">
      <Link className="mx-2" to="/productos">Productos</Link>
      <Link to="/cesta">Cesta</Link>
    </div>
    <div className="p-3 border">
      <Outlet></Outlet>
    </div>
  </div>
}