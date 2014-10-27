//app/routes.js
var controller = require('../controller/data_controller')

module.exports = function(app) {

	//Backend data service routes
	app.get('/api/events', function(req, res) {
		events = controller.getEvents(function(responseJSON) {
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify(responseJSON));
		});
	});

	app.get('/api/posts', function(req, res) {
		posts = controller.getPosts(function(responseJSON) {
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify(responseJSON));
		});
	});

	app.get('/api/getEvent/:id', function(req, res) {
		event = controller.getEventById(req.param("id"), function(responseJSON){
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify(responseJSON));
		});
	});

	//Frontend Routes
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html');
	});
};