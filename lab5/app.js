'use strict';

var fs =require('fs');
var http =require('http');
var express =require('express');
var path = require('path');
var routes = require('./routes/inventors.js');


var app = express();
app.use('/', routes);

app.set('strict routing',true);
app.enable('case sensitive routing');
app.enable('trust proxy');
app.set('x-powered-by',false);

app.set('view engine','html');
app.engine('html',require('ejs').__express);
app.set('views', __dirname+'/views');


//app.use('/users', users);

app.listen(4000,()=>{
    console.log('Server Listening at port 8888');
});

//Testing
console.log(JSON.parse(fs.readFileSync('./package.json','utf8')).name);
console.log(JSON.parse(fs.readFileSync('./inventors.json','utf8'))[0].first);
module.exports = app;