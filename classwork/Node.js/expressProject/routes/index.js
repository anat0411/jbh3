var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.end('index new index');
});

router.get('/delete', function(req, res, next) {
    res.end('delete');
});
module.exports = router;
