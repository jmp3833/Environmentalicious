// app/routes.js
module.exports = function(app) {
	
	//Frontend Routes

	app.get('/about', function(req, res) {
		res.sendfile('./public/views/about.html');
	});

	app.get('/findEvent', function(req, res) {
		res.sendfile('./public/views/findEvent.html');
	});

	app.get('/createEvent', function(req, res) {
		res.sendfile('./public/views/createEvent.html');
	});

	app.get('/discussions', function(req, res) {
		res.sendfile('./public/views/forumHome.html');
	});

	app.get('/forum', function(req, res) {
		res.sendfile('./public/views/forum.html');
	});

	app.get('/eventProfile', function(req, res) {
		res.sendfile('./public/views/singleEvent.html');
	});

	app.get('*', function(req, res) {
		res.sendfile('./public/views/home.html');
	});
};