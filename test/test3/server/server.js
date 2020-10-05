const express = require("express");
const cors = require("cors");
const { pool } = require("./dbConnection");
const port = process.env.PORT || 3001;
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

//GET products
app.route("/api/products").get((req, res) => {
  pool.query(
    `SELECT
     p.id as product_id, p.name as product_name, p.units as product_units, p.units_update_time, p.manufacturer as manufacturer_id, m.name as manufacturer_name
    FROM products as p LEFT JOIN manufacturers as m 
    ON p.manufacturer=m.id`,
    [],
    (err, results, fields) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

//POST change units number
app.route("/api/products/:id/units").post((req, res) => {
  const { units, units_update_time } = req.body;
  const id = req.params.id;

  if (isNaN(Number(units)) && isNaN(Number(id))) {
    res.json({ success: false });
    res.status(404);
    return;
  }

  pool.query(
    `UPDATE products
     SET units=?, units_update_time= CURRENT_TIMESTAMP
    WHERE id=? `,
    [units, id, units_update_time],
    (err, results, fields) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

app.listen(port, () => console.log(`Server running on port ${port}`));
