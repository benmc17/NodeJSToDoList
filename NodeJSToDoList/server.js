'use strict';
var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 8080;

// EJS Template Engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

// location of routes file
var router = require('./app/routes');
app.use('/', router);

// set static file locations CSS files etc
app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
    console.log('app started');
});

 