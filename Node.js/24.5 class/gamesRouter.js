const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("Get games list");
  })
  .post((req, res) => {
    res.send("Add new game");
  });

router
  .route("/:id")
  .get((req, res) => {
    res.send(`Get game id ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update game id ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete game id ${req.params.id}`);
  });

module.exports = router;
