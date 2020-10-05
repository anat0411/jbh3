const express = require("express");
const cors = require("cors");
const path = require("path");
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
app.use("/", express.static(path.join(__dirname, "public/build")));

app.route("/:category").get((req, res) => {
  const category = req.params.category;
  console.log(category);
  pool.query(
    `SELECT * FROM games WHERE gameCategory= + ${pool.escape(category)} `,
    (err, results, fields) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

app.route("/comments/:id").post((req, res) => {
  console.log("post comment");
  const { inputData } = req.body;
  console.log(inputData);

  pool.query(
    "INSERT INTO comments (commentOnGame, commentText ,commentTime) VALUES ?",
    [inputData],
    (err, results, fields) => {
      if (err) throw err;
      res.json(results.insertId);
    }
  );
});

app.route("/comments/:id").get((req, res) => {
  const id = req.params.id;
  console.log(id);
  pool.query(
    `SELECT * FROM comments WHERE commentOnGame= + ${pool.escape(id)} `,
    (err, results, fields) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

app.listen(port, () => console.log(`Server running on port ${port}`));
