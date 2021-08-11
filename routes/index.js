var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/rachana', function(req, res, next) {
  res.render('rachana');
});

router.get('/dylan', function(req, res, next) {
  res.render('dylan');
});

router.get('/disha', function(req, res, next) {
  res.render('disha');
});

router.get('/tanupreet', function(req, res, next) {
  res.render('tanupreet');
});

router.get('/kulpreet', function(req, res, next) {
  res.render('kulpreet');
});

module.exports = router;
