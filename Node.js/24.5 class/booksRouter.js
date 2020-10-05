const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("Get book list");
  })
  .post((req, res) => {
    res.send("Add new book");
  });

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get book id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update book id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete book id ${req.params.id}`);
  });

module.exports = router;
