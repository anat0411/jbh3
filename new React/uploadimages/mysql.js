const express = require("express");
const { v4: uuid4 } = require("uuid");
const path = require("path");
const multer = require("multer");
const app = express();
const port = process.env.PORT || 3000;

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);

    if (![".svg", ".png", ".jpeg", ".jpg"].includes(ext)) {
      return cb(new Error("file ext disallowed"));
    }

    cb(null, uuid4() + ext);
  },
});
const upload = multer({ storage: storage });

app.use("/uploads", express.static("uploads"));
app
  .route("/")
  .get((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send(`
            <html>
                <body>
                    <form action="/" method="POST" enctype="multipart/form-data">
                        <input type="file" name="profile"/>
                        <input type="text" name="username"/>
                        <input type="submit"/>
                    </form>
                </body>
            </html>
        `);
  })
  .post(upload.single("profile"), (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send(`
            <html>
                <body>
                    <img src="${req.file.path}"/>
                </body>
            </html>
        `);
  });

app.listen(port, () => console.log(`Server running on port ${port}`));
