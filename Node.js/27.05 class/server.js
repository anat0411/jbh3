const path = require("path");
const express = require("express");
const app = express();
const port = proccess.env.PORT || 3000;

const users = [];

app.use(express.urlencoded({ extended: false })); //for html form
app.use(express.json()); //for json

app.route("/").get((req, res) => {
  res.sendFile(path.join(__dirname, "form.html"));
});

app
  .route("./users")
  .get((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send(`
    <html>
    <body>
    <ul> 
${users.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    </body>
    </html
    `);
  })
  .post((req, res) => {
    const { name } = req.body;
    users.push(name);
    res.sendStatus(200);
  });

app.listen(port, () => console.log(`Server Listening on port${port}`));
