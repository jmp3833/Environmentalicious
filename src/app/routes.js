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
};