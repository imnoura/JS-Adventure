//this method will return the object:
const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const course = courses.find(function (course) {
  return course.name === "b";
});

console.log(course);

//this method will return the index of an object:
const courses1 = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const course1 = courses1.findIndex(function (course1) {
  return course.name === "b";
});

console.log(course1);
