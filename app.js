var express = require("express");
var app = express();
app.listen(8080);
console.log('server running on 8080');
app.get('/',function(req,res){
	res.send("test");
})