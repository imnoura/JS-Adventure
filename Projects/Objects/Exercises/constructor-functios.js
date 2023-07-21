let postBlog = new PostBlog("a", "b", "c");

console.log(postBlog);

function PostBlog(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}
