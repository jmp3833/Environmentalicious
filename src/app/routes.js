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

	app.get('/api/getPost/:id', function(req, res) {
		event = controller.getPostById(req.param("id"), function(responseJSON){
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify(responseJSON));
		});
	});

	app.get('/api/deleteEvent/:id', function(req, res) {
		event = controller.deleteEvent(req.param("id"));
		res.end("Event deleted!");
	});

	app.get('/api/deletePost/:id', function(req, res) {
		event = controller.deletePost(req.param("id"));
		res.end("Post deleted");
	});

	//Frontend Routes

	app.get('/', function(req, res) {
		res.sendfile('./public/views/index.html');
	});

	app.get('/about', function(req, res){
		res.sendfile('./public/views/about.html');
	});

	app.get('/partials/:name', function(req, res) {

		var name = req.params.name;
		console.log("Routing");
		console.log("partials/" + name);
		exports.partials = res.sendfile( './public/views/partials/' + name + '.html');

	});

};
