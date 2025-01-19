const sql = require("mssql");

const host = "10.110.20.73";
const config = {
  user: "sa",
  password: "123456",
  server: "10.110.20.73",
  database: "Book_Store",
  pool: {
    max: 20,
    min: 2,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false,
    trustServerCertificate: false,
    charset: "UTF-8",
  },
  driver: "msnodesqlv8",
};

let pool;

async function getPool() {
  if (!pool || !pool.connected) {
    try {
      pool = await sql.connect(config);
      console.log(`Database connection pool initialized on {${host}}`);
    } catch (err) {
      console.error("Error initializing database pool:", err);
      throw err;
    }
  }
  return pool;
}

async function executeQuery(query, params = {}) {
  const pool = await getPool();
  try {
    const request = pool.request();
    Object.keys(params).forEach((key) => {
      request.input(key, params[key]);
    });
    const result = await request.query(query);
    return result;
  } catch (err) {
    console.error("Database query error:", err);
    throw err;
  }
}

const cleanup = async () => {
  if (pool) {
    console.log("Closing database connection pool...");
    await pool.close();
  }
  process.exit(0);
};

process.on("exit", cleanup);
process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);

module.exports = {
  getPool,
  cleanup,
  executeQuery,
  host,
};
