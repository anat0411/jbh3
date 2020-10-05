const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

let counter = 0;

app.use((req, res, next) => {
  counter++;
  throw new Error("error mid");
  next();
});

app.use(express.urlencoded({ extended: false })); // for html form
app.use(express.json()); // for json

app.use((err, req, res, next) => {
  if (err) {
    res.sendStatus(500);
    return; // !important
  }

  next();
});

app.route("/").get((req, res) => {
  res.sendFile(path.join(__dirname, "static/form.html"));
});

app.route("/counter").get((req, res) => {
  res.send(`Counter: ${counter}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
