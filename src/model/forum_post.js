/**
* forumPost.js
* nessecary data for a forum post
**/

// Constructor
function Post(text, author, comments, id) {
  this.text = text;
  this.author = author;
  this.comments = comments;
  this.id = id;
}

// export the class
module.exports = Post;