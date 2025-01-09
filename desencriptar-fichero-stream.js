const { createDecipheriv, createECDH } = require("crypto");
const { exit } = require("process");
const args = require("yargs").argv;
const fs = require("fs");

if (!args.private && !args.public && !args.data) {
  console.log("Faltan argumentos");
  exit(0);
}

const origen = createECDH("secp521r1");
const key = fs.readFileSync("./data/" + args.private + ".key").toString();
origen.setPrivateKey(key, "hex");

const pub = fs.readFileSync("./data/" + args.public + ".pb").toString();

// Creación de la clave secreta compartida
const secret = Uint8Array.from(origen.computeSecret(pub, "hex", "hex"));

// Descifrado del fichero

const algo = "aes-256-cbc";
var descifrador = createDecipheriv(algo, secret.slice(0, 32), secret.slice(0, 16));
const inputFile = "./data/" + args.private + "-" + args.data + ".enc";
const outputFile = "./data/" + args.private + "-" + args.data + ".des";

fs.createReadStream(inputFile)
  .pipe(descifrador)
  .pipe(new fs.createWriteStream(outputFile))