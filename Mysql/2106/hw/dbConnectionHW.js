const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost", //127.0.0.1
  user: "anat_user",
  password: "81728172",
  database: "newschema",
});

pool.on("connection", (conn) => {
  console.log(`New connection id: ${conn.threadId}`);
});

pool.on("acquire", (conn) => {
  console.log(`Acquire connection id: ${conn.threadId}`);
});

pool.on("enqueue", (conn) => {
  console.log(`Enqueue connection`);
});

pool.on(`release`, (conn) => {
  console.log(`Connection id released, ${conn.threadId}`);
});

const query1 = `SELECT customers.name AS customer, products.price, products.name AS product FROM newschema.orders_products AS orders_products
INNER JOIN newschema.orders AS orders
ON orders_products.order_id = orders.id
INNER JOIN newschema.customers AS customers
ON customers.id = orders.customer_id
INNER JOIN newschema.products AS products
ON products.id = orders_products.product_id
ORDER BY products.price DESC 
LIMIT 1
`;

const query2 = `SELECT products.name AS cheapestProduct, products.price, products.year FROM newschema.products AS products ORDER BY price LIMIT 1 
`;

const query3 = `SELECT COUNT(*) AS ordersNum FROM newschema.orders
`;

const query4 = `SELECT customers.id, customers.name AS customer FROM newschema.customers AS customers
LEFT JOIN newschema.orders AS orders
ON customers.id= orders.customer_id
WHERE orders.customer_id IS NULL`;

pool.getConnection((err, conn) => {
  if (err) throw err;

  conn.query({ sql: query1 }, (err, res, fields) => {
    if (err) throw err;
    console.log(res);
  });

  conn.query({ sql: query2 }, (err, res, fields) => {
    if (err) throw err;
    console.log(res);
  });

  conn.query({ sql: query3 }, (err, res, fields) => {
    if (err) throw err;
    console.log(res);
  });

  conn.query({ sql: query4 }, (err, res, fields) => {
    if (err) throw err;
    console.log(res);
  });
});
