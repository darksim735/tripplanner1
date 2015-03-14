var express = require('express');
var async = require('async');
var swig = require('swig');
var path = require('path');
var sassMiddleware = require('node-sass-middleware');

var routes = require('./routes/routes');
var app = express();

app.use('/', routes);
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.use(sassMiddleware({
    src: path.join(__dirname, "assets"),
    dest: path.join(__dirname, "public"),
    debug: true,
    outputStyle: 'compressed',
    prefix:  '/prefix'
}));

app.use('/stylesheets', express.static(__dirname + '/public/stylesheets'));

swig.setDefaults({cache: false});
app.engine('html', swig.renderFile);

app.set('view engine', 'html');

app.listen(3000);

module.exports = app;
