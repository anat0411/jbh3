const express = require("express");
const passport = require("passport");
const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;
const port = process.env.PORT || 3000;
const app = express();
const data = require("./data.json");
const cors = require("cors");

const user = {
  username: "fadi",
  password: "123456",
  admin: true,
};

passport.use(
  new LocalStrategy((username, password, done) => {
    try {
      // user exists
      if (username === user.username && password === user.password) {
        return done(null, user);
      }

      // user doesn't exists
      done(null, false);
    } catch (e) {
      // error
      done(e);
    }
  })
);

// Save user data in session
passport.serializeUser((user, done) => {
  const { username, admin } = user;
  done(null, { username, admin }); // remove password from session
});

// Get user data from the session
passport.deserializeUser((user, done) => {
  done(null, user);
});

const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
};

app.use(
  cors({
    origin: (origin, next) => {
      console.log(origin);
      if (origin === "http://localhost:3001") {
        next(null, true);
      } else {
        next(new Error("Cors"));
      }
    },
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    name: "sessionID",
    secret: process.env.SECRET || "asdf@#$%fdgsdfg234dfsG345__sdf!",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 1000, // 1 hour
      httpOnly: true,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/api", isAuth, (req, res) => {
  res.json(data);
});

app.route("/login").post(passport.authenticate("local"), (req, res) => {
  if (req.isAuthenticated()) {
    return res.json({ success: true });
  }

  res.json({ success: false });
});

app.get("/logout", isAuth, (req, res) => {
  req.logout(); // passport logout
  res.redirect("/login");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
