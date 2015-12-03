var express = require('express');
var app = express();

var movies = [
	{
		title: "Kill Bill Vol 1",
		director: "Tarantino"
	},
	{
		title: "No Country for Old Men",
		director: "The Coen Brothers"
	}
];

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(express.static('public'));

app.get('/', function (req, res) {
	console.log('req = ', req);
	console.log('res = ', res);
	res.sendFile('views/index.html' , { root : __dirname})
});

app.get('/api/movies', function (req, res) {
	res.json(movies);
	console.log(movies);
})


app.listen(process.env.PORT || 3000, function () {
	console.log("app listening at http://localhost:300/");
});