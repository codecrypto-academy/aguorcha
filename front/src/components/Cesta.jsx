import { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Link } from "react-router-dom";
import { ethers } from "ethers";

export function Cesta() {
  const [estado, setEstado] = useContext(Context);
  const [cuenta, setCuenta] = useState(null);
  const [txOk, setTxOk] = useState(null);
  const [txKo, setTxKo] = useState(null);
  const total = estado.cesta.reduce((acc, item) => acc + item.total, 0);
  useEffect(() => {
    window.ethereum &&
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((cuentas) => {
          setCuenta(cuentas[0]);
          window.ethereum.on("accountsChanged", (cuentas) => {
            setCuenta(cuentas[0]);
          });
        });
  }, []);

  async function pagar() {
    const txParams = {
      to: "0x9C59b2f21B77C11EF9b9EC3195df199980fe6f15",
      from: cuenta,
      value: ethers.toBeHex(ethers.parseEther(total.toString())),
    };
    try {
      const tx = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [txParams],
      });
      setTxOk(tx);
    } catch (error) {
      setTxKo(error);
    }
    console.log(txParams);
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {estado.cesta.map((i) => (
            <tr key={i.producto.ProductID}>
              <td>
                <Link to={`/productos/${i.producto.ProductID}`}>
                  {i.producto.ProductID}
                </Link>
              </td>
              <td>{i.producto.ProductName}</td>
              <td>{i.producto.UnitPrice}</td>
              <td>{i.cantidad}</td>
              <td>{i.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total {total}</h3>
      <h4>{cuenta}</h4>
      <button onClick={() => pagar()} className="btn btn-primary mb-4">
        Pagar
      </button>
      {txOk && <p className="alert alert-success">{txOk}</p>}
      {txKo && <p>{txKo}</p>}
    </div>
  );
}
