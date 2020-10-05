const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost", //127/0/0/1
  user: "anat_user",
  password: "81728172",
  database: "jbh_chat",
});

pool.on("connection", () => {
  console.log("Connecting to mysql");
});

pool.query(
  `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name CHAR(100) NOT NULL,
        email CHAR(150) NOT NULL UNIQUE,
        password char(100) NOT NULL
    );
`,
  (err, results) => {
    if (err) throw err;
  }
);

pool.query(
  `
    CREATE TABLE IF NOT EXISTS messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        sender INT NOT NULL,
        message VARCHAR(1000) NOT NULL,
        created TIMESTAMP NOT NULL DEFAULT NOW(),
        FOREIGN KEY (sender) REFERENCES users(id)
    )
`,
  (err, results) => {
    if (err) throw err;
  }
);

module.exports = { pool };
