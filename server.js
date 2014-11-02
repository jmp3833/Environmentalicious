//server.js
//root express server of the application. 
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
	type : 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({
	extended : true
})); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the
													// X-HTTP-Method-Override
													// header in the request.
													// simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location
												// /public/img will be /img for
												// users

require('./src/app/routes')(app); // configure our routes

console.log("Server started!");
app.listen(80);
console.log(__dirname);

exports = module.exports = app;
