const express = require("express");
const session = require("express-session");
const port = process.env.PORT || 3000;
const secret = process.env.SECRET || "asdf234@#$sdf@#$fdsfsd";
const app = express();

const isAuth = (req, res, next) => {
  const { username } = req.session;
  if (username === "anat") return next();

  res.sendStatus(403);
};

app.use(
  session({
    name: "sessionID",
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 120,
    },
  })
);
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
      req.session.username = "yehuda";
      res.redirect("/account");
      return;
    }
    res.sendStatus(401);
  });

app.get("/account", isAuth, (req, res) => {
  res.send(`Hello ${req.session.username}`);
});

app.get("/logout", isAuth, (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
