const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const { pool } = require("./mysql");
const bcrypt = require("bcrypt");
const session = require("express-session");
const multer = require("multer");
const path = require("path");
const port = process.env.PORT || 3000;
const { v4: uuid4 } = require("uuid");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "images"),
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, uuid4() + ext);
  },
});

const upload = multer({ storage: storage });

const appSession = session({
  secret: process.env.SECRET || "asdf#$%#rgdfg3f",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60, // 1 hour
  },
});

io.use((socket, next) => {
  appSession(socket.request, {}, next);
});

io.use((socket, next) => {
  if (socket.request.session.user) return next();
  // next(new Error('403'));
  socket.disconnect();
});

io.on("connection", (socket) => {
  console.log(`New connection id ${socket.id}`);

  socket.on("get_msg", (data) => {
    const { id, name } = socket.request.session.user;

    pool.query(
      `
            INSERT INTO messages (sender, message) 
            VALUES (?,?);
        `,
      [id, data],
      (err, results) => {
        if (err) throw err;

        io.emit("msg", {
          id: results.insertId,
          name: name,
          msg: data,
        });
      }
    );
  });

  socket.on("disconnect", () => {
    console.log(`Connection id ${socket.id} disconnected!`);
  });
});

const isAuth = (req, res, next) => {
  if (req.session.user) return next();
  res.sendStatus(403);
};

app.use(appSession);
app.use("/", express.static("./client/build"));
app.use("/api/images", express.static("./images"));
app.use("/api", express.json());
app.use("/api", express.urlencoded());

app.route("/api/images").post(isAuth, upload.single("image"), (req, res) => {
  io.emit("image", req.file.filename);

  res.sendStatus(200);
});

app.route("/api/auth/verify").get(isAuth, (req, res) => {
  res.sendStatus(200);
});

app.route("/api/login").post((req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ success: false, msg: "Missing fields" });
  }

  pool.query(
    `
            SELECT * FROM users
            WHERE email = ?
        `,
    [email],
    (err, results) => {
      if (err) throw err;

      if (results.length) {
        const { password: hash, name, id } = results[0];

        bcrypt.compare(password, hash, (err, same) => {
          if (err) throw err;

          // success login
          if (same) {
            req.session.user = { name: name, id: id };
            res.json({ success: true });
          } else {
            res.json({ success: false });
          }
        });
      } else {
        res.json({ success: false });
      }
    }
  );
});

app.route("/api/register").post((req, res) => {
  const { name, email, password } = req.body;

  if (!email || !password || !name) {
    return res.json({ success: false, msg: "Missing fields" });
  }

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) throw err;

    pool.query(
      `
                INSERT INTO users (name, email, password)
                VALUES (?,?,?);
            `,
      [name, email, hash],
      (err, results) => {
        if (err) {
          if (err.code === "ER_DUP_ENTRY") {
            return res.json({ success: false, msg: "Email already exists" });
          }

          throw err;
        }

        res.json({ success: true, msg: results.insertId });
      }
    );
  });
});

http.listen(port, () => console.log(`Server running on port ${port}`));
