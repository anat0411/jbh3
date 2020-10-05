const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost", //127.0.0.1
  user: "anat_user",
  password: "81728172",
  database: "newschema",
});

// pool.end((err) => { //ends the connection
//   if (err) throw err;
// });

pool.on("connection", (conn) => {
  //asking the fist connection
  console.log(`New connection id: ${conn.threadId}`);
});

pool.on("acquire", (conn) => {
  //using the first connection to make acquire
  console.log(`Acquire connection id: ${conn.threadId}`);
});

pool.on("enqueue", (conn) => {
  console.log(`Enqueue connection`);
});

pool.on(`release`, (conn) => {
  console.log(`Connection id released, ${conn.threadId}`);
});

const query = `
SELECT * FROM orders
LEFT JOIN customers
ON orders.customer_id= customers.id`;

pool.getConnection((err, conn) => {
  if (err) throw err;

  conn.query({ sql: query, nestTables: true }, (err, res, fields) => {
    console.log(res);
    conn.release(); //releases the connection to the pool and we can no longer use it
  });
});

// connection.connect((err) => {
//   if (err) throw err;
//   console.log(`Mysql connection on id: ${connection.threadId}`);
// });

// connection.query(`SELECT * FROM products;`, (err, res, fields) => {
//   if (err) throw err;

//   console.log(res);
// });

// connection.query(
//   {
//     sql: `SELECT * FROM orders LEFT JOIN customers ON orders.customer_id = customers.id`,
//     nestedTables: true,
//   },
//   (err, res, fields) => {
//     if (err) throw err;
//     console.log(res);
//   }
// );
