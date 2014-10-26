/**
* event.js
* nessecary data for a sustainability event. 
**/

// Constructor
function Event(location, name, coordinator) {
  this.location = location;
  this.name = name;
  this.coordinator = coordinator;
}

// export the class
module.exports = Event;