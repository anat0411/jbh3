const express = require("express");
const bcrypt = require("bcrypt");
const session = require("express-session");
const cors = require("cors");
const path = require("path");
const { pool } = require("./dbConnection");

const port = process.env.PORT || 3001;
const saltRounds = 10;
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SECRET || "sadfsdf@#$sdf23",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60,
    },
  })
);

app.use(express.json());
app.use("/", express.static(path.join(__dirname, "public/build")));

app
  .route("/users")
  .get((req, res) => {
    pool.query("SELECT * FROM users", (err, results, fields) => {
      if (err) throw err;

      res.json(results);
    });
  })
  .post((req, res) => {
    const { email, password } = req.body;
    // input validation

    bcrypt.genSalt(saltRounds, (err, salt) => {
      //start creating the hash
      if (err) throw err;

      bcrypt.hash(password, salt, (err, hash) => {
        //doing the hash
        if (err) throw err;

        pool.query(
          "INSERT INTO users (email, password) VALUES (?,?)",
          [email, hash],
          (err, results, fields) => {
            if (err) {
              if (err.code === "ER_DUP_ENTRY") {
                return res
                  .status(500)
                  .json({ success: false, message: "Email already exist" });
              }

              return res.status(500).json({ success: false });
            }

            res.json({ success: true, user: results.insertId });
          }
        );
      });
    });
  });

app.route("/auth/login").post((req, res) => {
  const { email, password } = req.body;
  // user input validation

  pool.query(
    "SELECT id, password FROM users WHERE email=?",
    email,
    (err, results, fields) => {
      if (err) throw err;

      if (results.length) {
        const { id, password: hash } = results.pop();

        bcrypt.compare(password, hash, (err, isEqual) => {
          //check if password and hash is tha same
          if (err) throw err;

          if (isEqual) {
            req.session.userid = id;
            res.json({ success: true, user: id });
          } else {
            res.sendStatus(401);
          }
        });
      } else {
        res.sendStatus(401);
      }
    }
  );
});

app.route("/auth/verify").get((req, res) => {
  if (req.session.userid) {
    console.log(req.session.userid);

    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.use((err, req, res, next) => {
  if (err) return res.sendStatus(500);
  next();
});

app.listen(port, () => console.log(`Server running on port ${port}`));
