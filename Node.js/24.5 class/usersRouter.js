const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("Hello users");
  })
  .post((req, res) => {})
  .delete((req, res) => {});

module.exports = router;
