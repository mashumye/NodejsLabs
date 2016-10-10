'use strict';
var http = require('http');
var url =require('url');
var queryString = require('querystring');
var fs =require('fs');
var port = 8888;

http.createServer(function(req,res){
console.log("a request for: "+req.url);
var urlStr = '.' + req.url;
var pathName =url.parse(urlStr).pathname;
console.log('path is: '+pathName);

var readStream = fs.createReadStream(pathName,'utf8');
res.writeHead(200,{'content-type':'text/plain'});

readStream.pipe(res);

}).listen(port);
console.log('Server is listening on '+port);