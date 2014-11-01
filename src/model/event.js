/**
* event.js
* nessecary data for a sustainability event. 
**/

// Constructor
function Event(name, location, description, email, id) {
  this.name = name;
  this.location = location;
  this.description = description;
  this.email = email;
  this.id = id;
}

// export the class
module.exports = Event;