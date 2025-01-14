const express = require("express");
const { Web3 } = require("web3");
require('dotenv').config();
const app = express();
const web3 = new Web3(process.env.URL_INFURA);

app.get("/", async (req, res) => {
  const bloque = await web3.eth.getBlockNumber();
  res.send({ bloque });
})

app.get("/bloque/:bloque", async (req, res) => {
  const bloque = await web3.eth.getBlock(req.params.bloque);
  res.send(bloque);
})

app.get("/tx/:tx", async (req, res) => {
  const tx = await web3.eth.getTransaction(req.params.tx);
  res.send(tx);
})

app.get("/balance/:address", async (req, res) => {
  const balance = await web3.eth.getBalance(req.params.address);
  res.send({
    balance,
    ethers: web3.utils.fromWei(balance, 'ether')
  });
})

BigInt.prototype.toJSON = function () {
  return this.toString();
};

app.listen(3333, () => {
  console.log("Servidor escuchando en http://localhost:3333");
});