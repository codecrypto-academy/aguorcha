import { ethers } from 'ethers';

const provider = new ethers.JsonRpcProvider("http://localhost:9556");
const walletAddress = "0xe030acd22F12f896f6beB8412D5d3289f5E45768";
const wallet = new ethers.Wallet("0x1b1e3c0de8dee3199f99b2058f8aaad3ed807510218a33b15aa3cc1dd6c13fd3", provider);

async function getUltimoBloque() {
  const bloque = await provider.getBlockNumber();
  console.log("Ultimo bloque:", bloque);
  return bloque;
}

async function getBalance() {
  const balance = await provider.getBalance(walletAddress);
  console.log("Balance:", balance.toString());
  return balance;
}

async function getBloque(blockNumber) {
  const bloque = await provider.getBlock(blockNumber);
  console.log("Datos del bloque:", bloque);
}

async function getTransaction(hash) {
  const txR = await provider.getTransaction(hash);
  console.log("Datos de la transacción:", txR);
}

async function sendTransaction() {
  try {
    const tx = {
      to: "0xF324d070B3eE4B14F6432C372119392a7fE76530",
      value: ethers.parseEther("10"),

    };
    const txResponse = await wallet.sendTransaction(tx);
    console.log("Datos transacción:", txResponse);
  } catch (error) {
    console.error("Error al enviar la transacción:", error);
  }
}

async function main() {
  await getUltimoBloque();
  await getBalance();
  await sendTransaction();
  await getBalance();
  await getBloque(449);
  await getTransaction("0xaae8c17edef40d466dc61f5651e93e0c20d13e09f2bedc2a30450d5599f4a131");
}

main().catch(console.error);