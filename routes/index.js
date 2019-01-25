var express = require('express');
var router = express.Router();
var db = require('../dbconfig');
var async = require('async');

/* GET home page. */
router.get('/', async function(req, res, next) {
  await db.set('radis-key', 'redis-value');
  var mydata = await db.get('radis-key');
  res.render('index', { title: mydata });
});

module.exports = router;
