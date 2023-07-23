const numbers = [1, -1, 2, 3];

//to check if all numbers in this array are positive:
//when we call this mehod(numbers.every) this is what is going to happen: this method will run this function on every element in this array. as soon as it finds an element that does not match this criteria it is going to stop searching.
const allPositive = numbers.every(function (value) {
  return value >= 0;
});

console.log(allPositive);

//we have a similar method called "some": and that checks to see if we have at least one element in this array that matches this criteria.
const atLeastOnePositive = numbers.some(function (value) {
  return value >= 0;
});

console.log(atLeastOnePositive);

//every() => checks to see if every element in the given array matches the given criteria.
//some() => checks to see if we have at least one element that matches the given criteria.
