const path = require("path");
const express = require("express");
const booksRouter = require("./booksRouter");
const gamesRouter = require("./gamesRouter");
const usersRouter = require("./usersRouter");
const port = process.env.PORT || 3000;
const app = express();

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/books", booksRouter);
app.use("/games", gamesRouter);
app.use("/users", usersRouter);

app
  .route("/students")
  .get((req, res) => {})
  .post((req, res) => {})
  .delete((req, res) => {});

app.get("/hello", (req, res) => {
  res.sendFile(path.join(__dirname, "views/hello.html"));
});

app.post("/hello", (req, res) => {
  res.send("hello");
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
