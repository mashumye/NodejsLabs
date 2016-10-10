'use strict';
//Exercise 1
var buff =new Buffer(100);
for(var i = 0; i<buff.length;i++){
	buff[i] =i;
}
console.log(buff.toJSON('utf8'));

//Exercise 2
var sliceBuf =buff.slice(40,60);
console.log(sliceBuf.toJSON());

//Exercise 3
var copyBuf =new Buffer(20);
var targetStart =0, sourceStart =40, sourceEnd =60;
buff.copy(copyBuf,targetStart,sourceStart,sourceEnd);
console.log(copyBuf.toJSON());

