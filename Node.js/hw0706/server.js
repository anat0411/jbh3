const port = process.env.PORT || 3000;
const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const app = express();
const path = require("path");

//create user
const user = {
  username: "Omer",
  password: "0000",
};

//check if user exists
passport.use(
  new LocalStrategy((username, password, done) => {
    try {
      if (username === user.username && password === user.password) {
        return done(null, user);
      }
      done(null, false);
    } catch (e) {
      done(e);
    }
  })
);

//save data in session
passport.serializeUser((user, done) => {
  const { username } = user;
  done(null, { username });
});

//check if user authorized
const isUserAuthorize = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
};

//get user from session
passport.deserializeUser((user, done) => {
  done(null, user);
});

//initialize express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//initialize passport and session
app.use(passport.initialize());
app.use(passport.session());

//create session
app.use(
  session({
    name: "sessionID",
    secret: process.env.SECRET || "asdf@#$%fdgsdfg234dfsG345__sdf!",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
    },
  })
);

//login route --> get the login form, then post the data
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/homepage.html"));
});

app
  .route("/login")
  .get((req, res) => {
    res.sendFile(path.join(__dirname, "/login.html"));
  })
  .post(
    passport.authenticate("local", {
      failureRedirect: "/login",
      successRedirect: "/account",
    })
  );

//account route --> Hello blah blah...
app.get("/account", isUserAuthorize, (req, res) => {
  const { username } = req.user;
  res.send(`Hello ${username}`);
});

//logout route --> passport logout
app.get("/logout", isUserAuthorize, (req, res) => {
  req.logout();
  res.redirect("/login");
});

app.listen(port, () => console.log(`Server is running on on ${port}`));
