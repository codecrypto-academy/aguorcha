import express from "express";
import { Request, Response } from "express";
import cors from 'cors';
import { ethers } from "ethers";

const app = express();
app.use(express.json());
app.use(cors());

const port = 3333;

app.get("/api/balanceEthers/:address", async (req: Request, res: Response) => {
  const { address } = req.params;
  const provider = new ethers.JsonRpcProvider('http://localhost:5556/');
  const balance = await provider.getBalance(address);
  res.json(
    { address, balance: Number(balance) / 10 ** 18, fecha: new Date().toISOString() }
  );
})

app.get("/api/balance/:address", async (req: Request, res: Response) => {
  const { address } = req.params;
  const retorno = await fetch('http://localhost:5556', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'eth_getBalance',
      params: [
        address,
        'latest'
      ],
      id: 1
    })
  })
  const data = await retorno.json();
  res.json({
    address,
    balance: Number(data.result) / 10 ** 18,
    fecha: new Date().toISOString()
  });
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
