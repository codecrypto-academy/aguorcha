const mssql = require("mssql");
const config = {
  user: "sa",
  password: "my-secret-pw",
  database: "northwind",
  server: "localhost",
  pool: {
    min: 0,
    max: 10,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true,
    trustServerCertificate: true,
  }
}

async function q(sql) {
  try {
    await mssql.connect(config);
    const result = await mssql.query(sql);
    return result;
  } catch (error) {
    return { error }
  }
}

q("select * from Customers limit 10").then(res => {
  console.log(res);
}).catch(e => {
  console.log(e);
})