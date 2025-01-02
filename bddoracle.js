const oracledb = require("oracledb");
let pool = null;

try {
  oracledb.initOracleClient({
    libdir: "/opt/instantclient_23_6"
  })
} catch (error) {
  console.log(error);
}

async function getPool(con) {
  return new Promise(async (resolve, reject) => {
    if (pool) {
      resolve(pool);
      return;
    }
    try {
      pool = await oracledb.createPool(con);
      resolve(pool);
    } catch (error) {
      reject(error);
    }
  });
}

async function q(sql, parametros) {
  let connection;
  try {
    await getPool({
      user: "C##DATOS",
      password: "datos",
      connectString: "localhost:1521/XE",
      poolAlias: "curso",
    });
    connection = await oracledb.getConnection("curso");
    const resultados = await connection.execute(sql, parametros, {
      outFormat: oracledb.OUT_FORMAT_ARRAY
    });
    return resultados;

  } catch (error) {
    return error;
  } finally {
    if (connection) await connection.close();
  }
}

q("select * from customers", []).then(r => { console.log(r) }).catch(e => { console.log(e) });