const { pool } = require("./dbConnection");

// pool.query('SELECT * FROM customers', (err, res, fields) => {
//     if(err) throw err;

//     console.log(res);
// });

// pool.query('UPDATE customers SET name=\'hello\' WHERE id=9', (err, res, fields) => {
//     if(err) throw err;

//     console.log(res.affectedRows, res.changedRows);
// });

pool.query(
  "INSERT INTO orders (customer_id, date) VALUES (1, now())",
  (err, res, fields) => {
    if (err) throw err;

    const orderID = res.insertId;

    pool.query(
      "INSERT INTO orders_products (order_id, product_id) VALUES (" +
        orderID +
        ", 2)",
      (err, res, fields) => {
        if (err) throw err;

        console.log(res);
      }
    );
  }
);
