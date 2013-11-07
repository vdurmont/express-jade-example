var express = require('express');
var app = express();

app.get('/', function(req, res){
	var name  = req.query.name != null ? req.query.name : "World";
	res.send('Hello, '+name+'!');
});

app.listen(3333);
console.log('Running on port 3333!');