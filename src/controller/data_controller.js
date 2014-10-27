//data_controller.js
//simple data access model to read and write to JSON files

fs = require('fs')

//Get all event objects from JSON file
function getEvents(callback){
	fs.readFile('data/data.json', 'utf8', function (err, data) {
  	
  	if (err) {
    	return console.log(err);
  	}
  		parsedData = JSON.parse(data);
		  callback(parsedData.events)
	});
}

//Get all forum posts from JSON file
function getPosts(callback){
	fs.readFile('data/data.json', 'utf8', function (err,data) {
  	
  	if (err) {
    	return console.log(err);
  	}
  		parsedData = JSON.parse(data);
		  callback(parsedData.posts);
	});
}

//Get a single forum post based on unique identifier. 
function getPostById (id, callback){
	fs.readFile('data/data.json', 'utf8', function (err,data) {
  
  	if (err) {
    	return console.log(err);
  	}
  		posts = JSON.parse(data).posts;
		for (i = 0; i < posts.length; i++) {
			if (posts[i].id == id) {
			   callback(posts[i]); 
			}
		}
	});
}

//Get a single event based on unique identifier. 
function getEventById (id, callback){
	fs.readFile('data/data.json', 'utf8', function (err,data) {
  
  	if (err) {
    	return console.log(err);
  	}
  		events = JSON.parse(data).events;
		for (i = 0; i < events.length; i++) {
			if (events[i].id == id) {
				callback(events[i]); 
			}
		}
	});
}

module.exports = {
    getEvents: getEvents,
    getPosts: getPosts,
    getPostById: getPostById,
    getEventById: getEventById
};
