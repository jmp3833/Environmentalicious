/**
* event.js
* nessecary data for a sustainability event. 
**/

// Constructor
function Event(name, location, description, email, id, participants) {
  this.name = name;
  this.location = location;
  this.description = description;
  this.email = email;
  this.id = id;
  this.participants = participants;
  this.invitedFriends = [];
}

// export the class
module.exports = Event;