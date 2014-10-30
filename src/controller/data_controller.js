//data_controller.js
//simple data access model to read and write to JSON files

fs = require('fs')
Event = require('../model/event')
Post = require('../model/forum_post')

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

//Create an Event and store in JSON file
function createEvent(location, name, coordinator){
  fs.readFile('data/data.json', 'utf8', function (err, data) {
    
    if (err) {
      return console.log(err);
    }
      parsedData = JSON.parse(data);
      var id = parsedData.events[parsedData.events.length-1].id + 1
      var event = new Event(location, name, coordinator, id);
      parsedData.events.push(event);
      fs.writeFileSync('data/data.json', JSON.stringify(parsedData));
      //callback(parsedData.events)
  });
}

//Delete an event by ID if it exists
function deleteEvent(id){
  fs.readFile('data/data.json', 'utf8', function (err, data) {
    
    if (err) {
      return console.log(err);
    }
      parsedData = JSON.parse(data);
      for (i = 0; i < parsedData.events.length; i++){
        if (parsedData.events[i].id == id){
          parsedData.events.splice(parsedData.events[i], 1);
        }
      }

      fs.writeFileSync('data/data.json', JSON.stringify(parsedData));
      //callback(parsedData.events)
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

//Create a post and store in JSON file
function createPost(text, author, comments){
  fs.readFile('data/data.json', 'utf8', function (err, data) {
    
    if (err) {
      return console.log(err);
    }
      parsedData = JSON.parse(data);
      var id = parsedData.posts[parsedData.posts.length-1].id + 1
      var post = new Post(text, author, comments, id);
      parsedData.posts.push(post);
      fs.writeFileSync('data/data.json', JSON.stringify(parsedData));
      //callback(parsedData.posts)
  });
}

//Delete a post by ID if it exists
function deletePost(id){
  fs.readFile('data/data.json', 'utf8', function (err, data) {
    
    if (err) {
      return console.log(err);
    }
      parsedData = JSON.parse(data);
      for (i = 0; i < parsedData.posts.length; i++){
        if (parsedData.posts[i].id == id){
          parsedData.posts.splice(parsedData.posts[i], 1);
        }
      }

      fs.writeFileSync('data/data.json', JSON.stringify(parsedData));
      //callback(parsedData.events)
  });
}

module.exports = {
    getEvents: getEvents,
    getPosts: getPosts,
    getPostById: getPostById,
    getEventById: getEventById,
    createPost: createPost,
    deletePost: deletePost,
    createEvent: createEvent,
    deleteEvent: deleteEvent
};
