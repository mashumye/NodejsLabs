'use strict';
var fs =require('fs');
var http = require('http');
fs.readFile('./cs572.txt',function(err,data){
	//Exercise 1
	console.log(data.length);

	console.log(data.toString('utf8'));

	//Exercise 2
	console.log(data.slice(10,14).toString('utf8'));	
	console.log(data.toString('utf8'));
});

//Exercise 3
fs.writeFile('./cs572.txt','ABCDEFGHIJKLMNPQRSTUVWXYZ0123456789abcdefghijklmnpqrstuvwxyz',function(error){
	if(error) throw error;
	console.log('file overwritten!');
});

//Exercise 4
fs.appendFile('./cs572.txt','abc',function(error){
	if(error) throw error;
	console.log('file appended!');
});

//Exercise 5
var file;
fs.readFile('./cs572.txt',function(err,data){
  data[10]='7';
  fs.writeFile('./cs572.txt',data,function(err){
	if(err) throw err;
	console.log('10th is overwritten!');
  });
  console.log(data.toString('utf8'));
});

//Stream 3MB file Exercise
var readStream =fs.createReadStream('./3mb.jpg');
http.createServer(function(req,res){
	readStream.pipe(res);
}).listen(4000,()=>{
	console.log('Listening to stream');
});


