var express = require('express');
var router = express.Router();
var fs=require("fs")

var multer=require('multer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




router.get("/tuozhuai",(req,res)=>{
	res.render("tuozhuai");
})

router.post("/tuozhuai",(req,res)=>{


	console.log(req);
	console.log(JSON.stringify(req.body));
	


})

module.exports = router;












