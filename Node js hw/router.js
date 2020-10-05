const express = require("express");
const router = express.Router();
const users = require("./users");

router
  .route("/")
  .get((req, res) => {
    res.json(users);
  })
  .post((req, res) => {
    res.json(users);
  });

router
  .route("/:id")
  .get((req, res) => {
    const user = users.filter((user) => {
      return user.id === Number(req.params.id);
    });
    res.json(user);
  })
  .put((req, res) => {
    users.filter((user) => {
      user.id === req.params.id;
      res.json(users.user.id);
    });
  })
  .delete((req, res) => {
    users.filter((user) => {
      user.id === req.params.id;
      res.json(users.user.id);
    });
  });

module.exports = router;

//express midleware
