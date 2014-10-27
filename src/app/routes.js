// app/routes.js

var controller = require('../controller/data_controller')

module.exports = function(app) {

	//Backend data service routes

	app.get('/api/events', function(req, res) {
		events = controller.getEvents(function(responseJSON) {
			console.log(responseJSON);
		});
		res.end();
	});

	//If all else fails, go home
	app.get('*', function(req, res) {
		res.sendfile('./public/views/home.html');
	});
};