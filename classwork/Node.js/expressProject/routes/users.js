var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.end("Users List");
});

router.get("/delete", function(req, res, next) {
  res.end("delete user");
});

router.get("/login", function(req, res, next) {
  req.session.logged_in = true;
  res.send("Logged In");
});

router.get("/logout", function(req, res, next) {
  req.session.logged_in = false;
  res.send("Logged out");
});
module.exports = router;
