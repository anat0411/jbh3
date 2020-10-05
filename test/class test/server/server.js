const express = require("express");
const { pool } = require("./mysql");
const cors = require("cors");
const port = process.env.PORT || 3001;

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.get("/api/servers", (req, res) => {
  pool.query(
    `SELECT servers.id, servers.name AS server_name, servers.IP, servers.status, companies.name AS company_name, servers.created_on
    FROM servers AS servers
    LEFT JOIN companies AS companies ON servers.hosting_company=companies.id `,
    [],
    (err, results) => {
      if (err) throw err;

      res.json({ success: true, data: results });
    }
  );
});

app.post("/api/server/status", (req, res) => {
  const { id, status } = req.body;

  if (isNaN(Number(id)) || ![true, false].includes(status)) {
    res.json({ success: false });
    return;
  }

  pool.query(
    `
        UPDATE servers 
        SET status = ? 
        WHERE id = ?;
    `,
    [status, id],
    (err, results) => {
      if (err) throw err;

      res.json({ success: true });
    }
  );
});

app.listen(port, () => console.log(`Server running on port ${port}`));
