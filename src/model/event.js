/**
* event.js
* nessecary data for a sustainability event. 
**/

// Constructor
function Event(location, name, coordinator, id) {
  this.location = location;
  this.name = name;
  this.coordinator = coordinator;
  this.id = id;
}

// export the class
module.exports = Event;