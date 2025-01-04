const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db");

app.use(cors());
app.listen(5555);

app.get("/ping", (req, res) => {
  res.send({ fecha: new Date() });
});

app.get("/products", async (req, res) => {
  try {
    const [results, fields] = await db.q("select * from Products", []);
    res.send(results);
  } catch (error) {
    res.send({ error })
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const [results, fields] = await db.q("select * from Products where ProductID = ?", [req.params.id]);
    res.send(results);
  } catch (error) {
    res.send({ error })
  }
});