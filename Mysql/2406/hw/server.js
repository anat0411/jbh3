const express = require("express");
const { pool } = require("./dbConnection");
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.route("/products").get((req, res) => {
  //1 works
  pool.query("SELECT * FROM products", (err, results, fields) => {
    if (err) throw err;
    console.log(results);
    res.json(results);
  });

  app.route("/products").post((req, res) => {
    //2 works
    const { products } = req.body;
    pool.query(
      "INSERT INTO products (name, year, price, rating) VALUES ?",
      [products],
      (err, results, fields) => {
        if (err) throw err;
        res.json(results.insertId);
      }
    );
  });
});

app.route("/products/:id").get((req, res) => {
  //3 works
  const customerID = req.params.id;
  pool.query(
    `SELECT * FROM products WHERE id= + ${pool.escape(customerID)}`,
    (err, results, fields) => {
      if (err) throw err;
      console.log(results);
      res.json(results);
    }
  );

  app.route("/products/:id").delete((req, res) => {
    //4 works
    pool.query(
      `DELETE FROM products WHERE id= + ${pool.escape(customerID)}`,
      (err, results, fields) => {
        if (err) throw err;
        res.json({ success: results.affectedRows > 0 });
      }
    );
  });

  app.route("/products/:id").put((req, res) => {
    const customerID = req.params.id;
    const { name, year, price, rating } = req.body;
    //5 works
    pool.query(
      "UPDATE products SET name=?, year=?, price=?, rating=? WHERE id=?",
      [name, year, price, rating, customerID],
      (err, results, fields) => {
        if (err) throw err;
        res.json({ success: results.changedRows > 0 });
      }
    );
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
