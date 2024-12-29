import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Home } from "./components/Home";
import { Faucet } from "./components/Faucet";
import { Balance } from "./components/Balance";
import { Transfer } from "./components/Transfer";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    children: [
      { path: 'home', element: <Home /> },
      { path: 'faucet', element: <Faucet /> },
      { path: 'balance', element: <Balance /> },
      { path: 'transfer', element: <Transfer /> },
    ]
  }
])

export default function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
    
  )
}
