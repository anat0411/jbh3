const express = require("express");
const { pool } = require("./dbConnection");

const port = process.env.PORT || 3000;
const app = express();

app.get("/customers", (req, res) => {
  pool.query("SELECT * FROM customers", (err, results, fields) => {
    if (err) throw err;

    res.json(results);
  });
});

app.get("/customers/:id", (req, res) => {
  pool.query(
    "SELECT * FROM customers WHERE id=?",
    [req.params.id],
    (err, results, fields) => {
      if (err) throw err;

      res.json(results);
    }
  );
});

app.use((err, req, res, next) => {
  if (err) return res.sendStatus(500);
  next();
});

app.listen(port, () => console.log(`Server running on port ${port}`));
