/**
* forumPost.js
* nessecary data for a forum post
**/

// Constructor
function Post(text, author, comments) {
  this.text = text;
  this.author = author;
  this.comments = comments;
}

// export the class
module.exports = Post;