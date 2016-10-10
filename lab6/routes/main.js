'use strict';
var express =require('express');
var router =express.Router();
var fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

    res.render('index.html', { title: 'This is the conactus app.' });
});


/* GET contactus page. */
//var inspectors =JSON.parse(fs.readFileSync('./inspector.json'));
var sess;
var conData;
var con;
var success;
router.get('/contactus', function(req, res) {
    sess =req.session;
    sess.success= true;
    conData ={csrfToken: req.csrfToken(),success:sess.success};
    res.render('contactus.html',{con:conData});

});

//post data
router.post('/contactus', function(req, res) {
    //res.locals ={ csrf: req.csrfToken()};
   req.assert('fullName','Full Name is required').notEmpty();
   req.assert('message','Message is required').notEmpty();

   var errors = req.validationErrors();
   if(errors){
       sess.success=false;
       conData ={csrfToken: req.csrfToken(),errors:errors,success:sess.success};
       console.log(errors);
       res.render('contactus.html',{con:conData});
   }
   else{       
        var data ={fullName: req.body.fullName,type:req.body.type,message:req.body.message};
        console.log(data.fullName);
        fs.writeFile('./contact.txt',JSON.stringify(data),function(error){
            if(error) throw error;

            console.log('File successfully written.');           
        });       
         res.send("Thank you!.");      
   }
  
});



module.exports = router;