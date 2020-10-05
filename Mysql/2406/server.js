const express = require("express");
const { pool } = require("./dbConnection");
const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app
  .route("/customers")
  .get((req, res) => {
    pool.query("SELECT * FROM customers", (err, results, fields) => {
      if (err) throw err;

      res.json(results);
    });
  })
  .post((req, res) => {
    const { customers } = req.body;

    // customers = [['yehuda', 'TLV', 1234], ['A', 'B', 1234]]
    // ('yehuda', 'TLV', 1234), ('A', 'B', 1234)

    pool.query(
      "INSERT INTO customers (name, address, zipcode) VALUES ?",
      [customers],
      (err, results, fields) => {
        if (err) throw err;

        res.json(results.insertId);
      }
    );
  });

app
  .route("/customers/:id")
  .get((req, res) => {
    const customerID = req.params.id;
    const name = req.query.name;

    pool.query(
      "SELECT * FROM customers WHERE id=?",
      [customerID],
      (err, results, fields) => {
        if (err) throw err;

        res.json(results);
      }
    );
  })
  .put((req, res) => {
    const customerID = req.params.id;
    const { customer } = req.body;

    // customer = {name: 'x', address: 'TLV'}
    // name='x', address='TLV'

    pool.query(
      "UPDATE customers SET ? WHERE id=?",
      [customer, customerID],
      (err, results, fields) => {
        if (err) throw err;

        res.json({ success: results.changedRows > 0 });
      }
    );
  })
  .delete((req, res) => {
    const customerID = req.params.id;

    pool.query(
      "DELETE FROM customers WHERE id=?",
      customerID,
      (err, results, fields) => {
        if (err) throw err;

        res.json({ success: results.affectedRows > 0 });
      }
    );
  });

app.listen(port, () => console.log(`Server running on port ${port}`));
