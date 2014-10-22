// app/routes.js

module.exports = function(app) {
	
	//Frontend Routes
	app.get('/events', function(req, res) {
		res.sendfile('./public/views/events.html');
	});

	app.get('/forum', function(req, res) {
		res.sendfile('./public/views/forum.html');
	});

	app.get('/inviteFriends', function(req, res) {
		res.sendfile('./public/views/inviteFriends.html');
	});

	app.get('/joinEvent', function(req, res) {
		res.sendfile('./public/views/joinEvent.html');
	});

	app.get('/eventProfile', function(req, res) {
		res.sendfile('./public/views/singleEvent.html');
	});

	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html');
	});
};