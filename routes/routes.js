var express = require('express');
var router = express.Router();
var db = require('../models/index');

/* GET HOME PAGE */
router.get('/', function(req, res, next) {
	res.render('index');
});


module.exports = router;
