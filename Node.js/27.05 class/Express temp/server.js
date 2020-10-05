const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const users = {
  1: { name: "Sophie" },
  2: { name: "Raya" },
  3: { name: "Revital" },
};

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const currentBook = users[id];

  if (!currentBook) {
    return res.sendStatus(404);
  }

  res.render("book", {
    title: `My book ${currentBook.name}`,
    h1: `Welcome`,
    h2: `${currentBook.name}!!!!`,
  });
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const currentUser = users[id];

  if (!currentUser) {
    return res.sendStatus(404);
  }

  res.setHeader("Content-Type", "text/html");
  res.send(`
        <html>
            <body>
                <h1>
                    Hello ${currentUser.name}
                </h1>
            </body>
        </html>
    `);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
