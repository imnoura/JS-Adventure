const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const course = courses.find((course) => course.name === "a");
//we read the upper expression: course goes to course.name = a (we are finding a course with the name = a)

console.log(course);
