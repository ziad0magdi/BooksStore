const express = require("express");
const sql = require("mssql");
const db = require("./config/db");
const app = express();
const flash = require("connect-flash");

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(flash());

let PORT = "8080";

// Test route for notifications
app.get("/test", async (req, res) => {
  let pool = await db.getPool();

  //   console.log(pool);
  console.log("welcome");
  return res.json({
    done: true,
  });
});

app.listen(PORT, () => {
  console.log(` Worker  running at http://localhost:${PORT}`);
  //   db.getPool();
});
