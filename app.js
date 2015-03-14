var express = require('express');
var async = require('async');
var swig = require('swig');

var routes = require('./routes/routes');
var path = require('path');
var app = express();

app.use('/', routes);
app.use(express.static(path.join(__dirname, '/bower_components')));
//app.use(express.static(__dirname + '/bower_components'));

swig.setDefaults({cache: false});
app.engine('html', swig.renderFile);

app.set('view engine', 'html');

app.listen(3000);

module.exports = app;
