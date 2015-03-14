var express = require('express');
var async = require('async');
var swig = require('swig');

var routes = require('./routes/routes');

var app = express();

app.use('/', routes);
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.listen(3000);

module.exports = app;
