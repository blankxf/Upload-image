var express = require('express');
var router = express.Router();
var fs=require("fs")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




router.get("/upload",(req,res)=>{
	res.render("upload");
})

router.post("/upload",(req,res)=>{
	console.log(req.files);
	//传一张
	// var file = req.files[0];
	
	// var oldPath = "public/"+file.filename;
	// var newPath = "public/"+file.filename +".jpg";
	// fs.rename(oldPath,newPath,(err,data)=>{
	// 	if(err){
	// 		console.log("修改名称失败");
	// 		res.send("上传成功 修改失败");
	// 	}else {
	// 		console.log("修改成功");
	// 		res.send("上传加修改名称成功");
	// 	}
	// })

	// 传多张
	"use strict";
	for(let i=0;i<req.files.length;i++){        
        var file=req.files[i];
		var oldPath = "public/"+file.filename;
	    var newPath = "public/"+file.filename +".jpg";
	    var result=fs.renameSync(oldPath,newPath);
	    if(result==undefined){
	    	if(i==req.files.length-1){
	    		res.send("所有图片上传成功")
	    	  }
	       }else{
	    		res.send(`第${i}图片上传成功`);
	    	}
	    		
	    }
	

})

module.exports = router;












