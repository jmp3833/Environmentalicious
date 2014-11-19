Environmentalicious
==

Quite tasty. And looks decent on mobile as well.

## Synopsis

Environmentalicious is a web application that allows users to locate environmental conservation and sustainability events in their community. These users can create their own account and register to attend events that they believe are interesting. Users will also be able to discuss future events on a site hosted forum and make comments and suggestions on other user's events!

This application is in the pre-beta phase and exhibits only some main core functionalities. In the current state of the system, the user is able to create events, find events by their relative locations, and search for events based on criteria such as event name and event description tags. 

## Installation/Running

### If you would like to view the application without installing a server on your local machine, 
you may navigate to http://salsa.rit.edu:3000/

In order to load the application locally, Node.js must be installed on the local system. The most recent version of Node.js (0.10.33 at the time of this writing) can be found at http://nodejs.org/

Once a Node.js environment has been installed, open a command prompt or terminal and move to the root directory of the project. In order to install dependencies for the project, first type 'npm install'. Once this is completed, run the command 'node server.js' and navigate your browser to http://localhost:3000

```bash

//admin permissions may be required. open a cmd window with admin privleges in windows
sudo npm install
node server.js

```
## Known Bugs and Missing Functionality

* Application displays plain text JSON of data coming from the middleware API in some locations. This data will be formatted in future releases and displayed with more context for users. 

* There is no user authentication or login functionality. Selecting the 'log in' button on the main about page will direct the user into the web application with a default account

* There is no UI for forum posts or forum threads. The backend data services have been written and the user interface will be implemented in future releases. 

* There are no pages for individual events where users can register to attend the event. 

## Contributors

Danielle Gonzalez
Justin Peterson
Richie Kapadia
Joe Ksiazek

