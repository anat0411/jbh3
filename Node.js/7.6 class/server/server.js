const express = require("express");
const { data } = require("./data.json");
const session = require("express-session");
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 3000;
const app = express();

const bruteforce = (req, res, next) => {
  if (req.session.counter) {
    req.session.counter++;
  } else {
    req.session.counter = 1;
  }

  if (req.session.counter > 3) {
    res.sendStatus(403);
    return;
  }

  next();
};

app.use(
  cors({
    origin: "http://localhost",
    credentials: true,
  })
);

app.use(
  session({
    name: "sessionID",
    secret: process.env.SECRET || "asdf@#$%fdg f",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60, // 1 hour
    },
  })
);

app.use(bruteforce);

app.use("/", express.static(path.join(__dirname, "client")));

app.route("/users").get((req, res) => {
  res.json(data);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
