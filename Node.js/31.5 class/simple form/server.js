const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

const list = [];

const emailValidations = (email) => {
  return email.indexOf("@") > -1;
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
/**
 * req.body = {
 *  email: <email value>
 * }
 */

app
  .route("/")
  .get((req, res) => {
    res.send(`
            <html>
                <body>
                    <form method="POST" action="">
                        <input name="email" type="text" />
                        <input type="submit" value="submit">
                    </form>
                </body>
            </html>
        `);
  })
  .post((req, res) => {
    const { email } = req.body;

    if (!email || !emailValidations(email)) {
      return res.sendStatus(400);
    }

    list.push(email);

    res.redirect("/emails");
  });

app.get("/emails", (req, res) => {
  res.send(`
        <html>
            <body>
                <ol>
                    ${list.map((email) => `<li>${email}</li>`).join("")}
                </ol>
            </body>
        </html>
    `);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
