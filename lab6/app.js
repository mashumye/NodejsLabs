'use strict';

var fs =require('fs');
var express =require('express');
var bodyParser =require('body-parser');
var cookieParser =require('cookie-parser');
var validator = require('express-validator');
var session = require('express-session');
var csrf = require('csurf');
var csrfProtection =csrf({cookie:true});
var routes = require('./routes/main.js');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({secret:'almi'}));
//app.use('/', routes);
app.use(validator());
app.use(csrf());
app.use('/', routes);

app.use(function(req,res,next){
   res.locals.csrfToken =req.csrfToken();
   next();
});

app.set('strict routing',true);
app.enable('case sensitive routing');
app.enable('trust proxy');
app.set('x-powered-by',false);

app.set('view engine','html');
app.engine('html',require('ejs').__express);
app.set('views', __dirname+'/views');

// error handler
app.use(function (err, req, res, next) {
  if (err.code !== 'EBADCSRFTOKEN') return next(err)
 
  // handle CSRF token errors here
  res.status(403)
  res.send('session has expired or form tampered with')
})


app.listen(4000,()=>{
    console.log('Server Listening at port 4000');
});

module.exports = app;