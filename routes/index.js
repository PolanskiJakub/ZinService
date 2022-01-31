var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Zin Service' });
});

router.get('/Zin', function(req, res, next) {
  res.render('indexAfter', { title: 'Zin Service' });
});

module.exports = router;
