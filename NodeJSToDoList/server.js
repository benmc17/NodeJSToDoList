'use strict';
var express = require('express');
var app = express();
var port = 8080;

var router = require('./app/routes');
app.use('/', router);

app.listen(port, function() {
    console.log('app started');
});

 