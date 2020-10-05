const express = require("express");
const cookiesParser = require("cookie-parser");
const port = process.env.PORT || 3000;
const app = express();

const isAuth = (req, res, next) => {
  const { userID } = req.cookies;
  if (userID) return next();

  res.sendStatus(403);
};

app.use(cookiesParser());
app.use(express.urlencoded({ extended: false }));
app
  .route("/login")
  .get((req, res) => {
    res.send(`
            <html>
                <body>
                    <form method="POST" action="/login">
                        <input name="username" placeholder="username">
                        <input type="password" name="password" placeholder="pass">
                        <input type="submit">
                    </form>
                </body>
            </html>
        `);
  })
  .post((req, res) => {
    const { username, password } = req.body;
    if (username === "yehuda" && password === "1234") {
      res.setHeader(
        "Set-Cookie",
        `userID=Yehuda;Max-Age=${1000 * 60 * 60};httpOnly=true`
      );
      res.redirect("/account");
      return;
    }

    res.sendStatus(401);
  });

app.get("/account", isAuth, (req, res) => {
  res.send(`Hello ${req.cookies.userID}`);
});

app.listen(port, () => console.log(`Server running on port ${port}`));

// stateless
