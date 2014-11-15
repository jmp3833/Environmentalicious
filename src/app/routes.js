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

	app.post('/api/searchEvents', function(req, res) {
		query = req.body;
		controller.searchEvents(query.name, query.location, query.description, function(events){
			res.end(JSON.stringify(events));
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

	app.post('/api/joinEvent', function(req, res) {
		joinParams = req.body;
		console.log(joinParams);
		controller.joinEvent(joinParams[0], joinParams[1]);
		res.end("Event successfully joined!");
	});

	app.post('/api/createEvent', function(req, res) {
		eventResult = req.body;
		controller.createEvent(eventResult.name, eventResult.location, eventResult.description, eventResult.email);
		res.end("Event Created!");
	});

	app.post('/api/createPost', function(req, res) {
		var text = req.body.post.text;
		var author = req.body.post.author;
		var comments = req.body.post.comments;
		controller.createPost(text, author, comments);
		res.end("Post Created!");
	});

	app.post('/api/addFriends', function(req,res) {
		console.log("Made it here!");
		controller.addFriends(req.body);
		res.end("Friends Added!");
	});

	//Frontend Routes
	app.get('/', function(req, res) {
		res.sendfile('./public/views/about.html');

	});

	app.get('/index', function(req, res){
		res.sendfile('./public/views/index.html');
	});

	app.get('/partials/:name', function(req, res) {

		var name = req.params.name;
		console.log("Routing");
		console.log("partials/" + name);
		exports.partials = res.sendfile( './public/views/partials/' + name + '.html');

	});

};
