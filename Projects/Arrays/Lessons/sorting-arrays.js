const numbers = [2, 3, 1];
//the sort method is perfect when you have numbers and strings.
numbers.sort();

console.log(numbers);

//another method that is often companion to the sort method is reverse method.
numbers.reverse();
console.log(numbers);

//
const courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javaScript" },
];

courses.sort(function (a, b) {
  //each charater in computer is internally represented using a number so if we change the J of 'JavaScript' to j the number is bigger than the capital one and it is also bigger than N so it will show us Node.js first.
  //both these names should be either upperCase or lowerCase
  //for solving the upper problem we can do:
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  // a < b => -1
  // a > b => 1
  // a === b => 0
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
console.log(courses);
