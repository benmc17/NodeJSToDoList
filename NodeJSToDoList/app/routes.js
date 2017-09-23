'use strict';
var express = require('express');
var router = express.Router();

module.exports = router;

router.get('/', function (req, res) {
    res.send('hello world');
});

router.get('/about', function (req, res) {
    res.send('this is an about page');
});

router.get('/contact');
router.post('/contact');


