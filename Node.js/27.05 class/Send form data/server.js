const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const users = ["Yehuda"];

app.use(express.urlencoded({ extended: false })); // for html form
app.use(express.json()); // for json

app.route("/").get((req, res) => {
  res.sendFile(path.join(__dirname, "static/form.html"));
});

app
  .route("/users")
  .get((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send(`
            <html>
                <body>
                    <ul>
                        ${users.map((item) => `<li>${item}</li>`).join("")}
                    </ul>
                </body>
            </html>
        `);
  })
  .post((req, res) => {
    const { name } = req.body;
    users.push(name);

    res.redirect("/users");
  });

app.listen(port, () => console.log(`Server listening on port ${port}`));
