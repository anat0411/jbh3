const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost", // 127.0.0.1
  user: "anat_test",
  password: "81728172",
  database: "test_3",
});

pool.on("connection", (conn) => {
  console.log(`New connection id: ${conn.threadId}`);
});

module.exports = { pool };
