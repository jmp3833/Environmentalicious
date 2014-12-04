Environmentalicious
==

Quite tasty. And looks decent on mobile as well.

## Synopsis

Environmentalicious is a web application that allows users to locate environmental conservation and sustainability events in their community. These users can create their own account and register to attend events that they believe are interesting.

This is the very first release candidate of the application, and exhibits all main core functionalities. In the current state of the system, the user is able to create events, find events by their relative locations, and search for events based on criteria such as event name and event description tags. They may also join events and invite their friends to become event participants.  

## Installation/Running

### If you would like to view the application without installing a server on your local machine, 
you may navigate to http://salsa.rit.edu:3000/
* This link may not always be available. Please follow the instructions to install on your local machine if you cannot access the deployed version. 

In order to load the application locally, Node.js must be installed on the local system. The most recent version of Node.js (0.10.33 at the time of this writing) can be found at http://nodejs.org/

Once a Node.js environment has been installed, open a command prompt or terminal and move to the root directory of the project. In order to install dependencies for the project, first type 'npm install'. Once this is completed, run the command 'node server.js' and navigate your browser to http://localhost:3000

```bash

npm install
node server.js

```

## Application Usage
* Creating an event
** Navigate to the 'create event' section in the left hand bar bar of the home screen after login.
** Enter the desired event information and select the 'create event' button!

* Finding an already created event
** Navigate to the 'find event' section in the left hand bar of the home screen after login.
** Enter information such as the event name, event location, or a keyword which can be found in the description of an event you would like to attend!
** Click the 'find event' button and locate a result in the left hand portion of the screen. You may click on any of these events to navigate to the main event section of that page. 

* Joining an event
** Once on the main page for the specific event you would like to join, click the 'join event' button at the bottom of the screen. 
** A pop up will notify you that you have successfully joined the event. When you return to the individual event page you will be able to see yourself as a participant in the event. 

* Inviting friends to an event
** Provide valid line separated email addresses in the invite friends text box and click the 'invite friends' button.
** An alert will notify you that your friends have been successfully invited to the event and they will recieve an email letting them know they have been marked as a potential participant.

## Known Bug(s)

* There is no user authentication or login functionality. Selecting the 'log in' button on the main about page will direct the user into the web application with a default account

## Contributors

Danielle Gonzalez
Justin Peterson
Richie Kapadia
Joe Ksiazek

