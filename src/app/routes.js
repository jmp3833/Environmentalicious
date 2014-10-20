// app/routes.js

module.exports = function(app) {
	//Frontend Routes
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html');
	});
};