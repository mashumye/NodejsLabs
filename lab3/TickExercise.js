'use strict';
var EventEmitter=require('events');
//pseudoclass Tick
class Tick extends EventEmitter {
    constructor(){
        super();
        this.m='tick message';
    }
    getTick(){
        console.log(this.m);
        this.emit('tick');
    }
}

//Printing ticks every one second. 
var tick1 = new Tick();
tick1.on('tick', function() {
        console.log("Tick");
});
setInterval(function(){tick1.getTick();},1000);