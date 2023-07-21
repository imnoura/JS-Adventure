//a blog post object with these properties: title, body, author, views, comments: (author, body), isLive

let postBlog = {
  title: "a",
  body: "b",
  author: "c",
  views: 15,
  comments: [
    { author: "a", body: "b" },
    { author: "c", body: "d" },
  ],
  isLive: true,
};

console.log(postBlog);
