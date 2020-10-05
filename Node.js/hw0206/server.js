const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const path = require("path");
const session = require("express-session");
const secret = process.env.SECRET || "asdf234@#$sdf@#$fdsfsd";

let listOfUsers = [];

const isUserAuth = (req, res, next) => {
  const { username } = req.session;
  if (username) return next();
  res.sendStatus(403);
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    name: "sessionUsers",
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

app
  .route("/login")
  .get((req, res) => {
    res.sendFile(path.join(__dirname, "formLogin.html"));
  })
  .post((req, res) => {
    const { username, password } = req.body;
    if (username === "aaaa" && password === "0000") {
      req.session.username = "aaaa";
      res.redirect("/account");
      return;
    }
    res.sendStatus(401);
  });

app.get("/account", isUserAuth, (req, res) => {
  res.send(`Hello ${req.session.username}`);
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

app
  .route("/form")
  .get((req, res) => {
    res.sendFile(path.join(__dirname, "form.html"));
  })
  .post((req, res) => {
    const { fname, lname, email } = req.body;
    const user = [fname, lname, email];
    listOfUsers.push(user);
    req.session.users = listOfUsers;
    res.redirect("/users");
  });

app.get("/users", (req, res) => {
  const deleteUsers = req.session.destroy();
  res.send(`
          <html>
              <body>
                  <ol>
                      ${listOfUsers.map((user) => `<li>${user}</li>`).join(" ")}
                  </ol>
                  <button onclick="${deleteUsers}">Delete all users</button>
              </body>
          </html>
      `);
});

app.listen(port, () => console.log(`Server started on port ${port}`));
