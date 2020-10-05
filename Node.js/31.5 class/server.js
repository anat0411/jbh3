const express = require("express");
const app = express();
const port = 3000;

let counter = 0;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const midelware = (req, res, next) => {
  counter++;
  next();
};

app.route("/").get(midelware, (req, res) => {
  res.send(`
    <html>
    <body>
    <div> Counter ${counter} </div>
    </body>
    </html>
    `);
});

app.listen(port, () => console.log(`Server Listening on port${port}`));
