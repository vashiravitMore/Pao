var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/triangle', function(req, res, next) {
  res.render('triangle', { title: 'Express' });
});


module.exports = router;
