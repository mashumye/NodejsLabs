'use strict';
var express =require('express');
var router =express.Router();
var fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index.html', { title: 'Welcome to Inventors app' });
});


/* GET Inspectors page. */
var inventors =JSON.parse(fs.readFileSync('./inventors.json'));
router.get('/inventors', function(req, res) {
    res.render('inventors.html', { inventors: inventors});
});

//Case sensitive routing
router.get('/Inventors', function(req, res) {
    console.log('The other inventors page  is here.');
});

//Strict routing demo
router.get('/inventors/', function(req, res) {
    console.log('Demo for strict routing.');
});

module.exports = router;