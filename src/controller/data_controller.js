//data_controller.js
//simple data access model to read and write to JSON files

fs = require('fs')

//Get all event objects from JSON file
function getEvents(){
	fs.readFile('../../data/data.json', 'utf8', function (err,data) {
  	
  	if (err) {
    	return console.log(err);
  	}
  		parsedData = JSON.parse(data);
		return parsedData.events
	});
}

//Get all forum posts from JSON file
function getPosts(){
	fs.readFile('../../data/data.json', 'utf8', function (err,data) {
  	
  	if (err) {
    	return console.log(err);
  	}
  		parsedData = JSON.parse(data);
		return parsedData.posts
	});
}

//Get a single forum post based on unique identifier. 
function getPostById (id){
	fs.readFile('../../data/data.json', 'utf8', function (err,data) {
  
  	if (err) {
    	return console.log(err);
  	}
  		posts = JSON.parse(data).posts;
		for (i = 0; i < posts.length; i++) {
			if (posts[i].id == id) {
				return posts[i]; 
			}
		}
	});
}

//Get a single event based on unique identifier. 
function getEventById (id){
	fs.readFile('../../data/data.json', 'utf8', function (err,data) {
  
  	if (err) {
    	return console.log(err);
  	}
  		events = JSON.parse(data).events;
		for (i = 0; i < events.length; i++) {
			if (events[i].id == id) {
				return events[i]; 
			}
		}
	});
}
