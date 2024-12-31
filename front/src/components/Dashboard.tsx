import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function Dashboard() {
  return <div className="px-20">
    <Header />
    <h1 className="text-xl">Dashboard</h1>
    <Outlet />
  </div>
}