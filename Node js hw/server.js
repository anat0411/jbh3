const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const usersRouter = require("./router");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "html1.html"));
});
app.use("/users", usersRouter);

app.listen(port, () => console.log(`Server started on port ${port}`));
