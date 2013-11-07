var express = require('express');
var app = express();

// Jade
app.set('views', __dirname+'/views');
app.set('view engine', 'jade');

app.get('/', function(req, res){
	var name = req.query.name;
	if (name == null)
		res.render('world', {
			title: "MyApp for the world",
			date: new Date()
		});
	else
		res.render('user', {
			title: "MyApp for the you",
			name: name,
			reversedName: name.split("").reverse().join("")
		});
});

app.listen(3333);
console.log('Running on port 3333!');