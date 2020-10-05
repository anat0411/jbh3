const express = require("express");
const cors = require("cors");
const { pool } = require("./dbConnection");
const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.route("/api/servers").get((req, res) => {
  pool.query(
    `SELECT servers.id, servers.name AS server_name, servers.IP, servers.status, companies.name AS company_name, servers.created_on
    FROM test.servers AS servers
    LEFT JOIN test.companies AS companies ON servers.hosting_company=companies.id `,
    [],
    (err, results, fields) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

app.route("/api/server/onstatus").get((req, res) => {
  pool.query(
    `SELECT servers.id, servers.name AS server_name, servers.IP, servers.status, companies.name AS company_name, servers.created_on
    FROM test.servers AS servers
    LEFT JOIN test.companies AS companies ON servers.hosting_company=companies.id 
    WHERE status=1`,
    [],
    (err, results, fields) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

app.route("/api/server/status").post((req, res) => {
  //doesn't work
  const { status, id } = req.body;
  console.log(status, id);

  if (isNaN(Number(id)) || ![true, false].includes(status)) {
    res.json({ success: false });
    return;
  } // was missing

  pool.query(
    `UPDATE servers
    SET status = ? WHERE id= ?;`,
    [status, id],
    (err, results, fields) => {
      if (err) throw err;
      res.json(results);
    }
  );
});

app.listen(port, () => console.log(`Server running on port ${port}`));
