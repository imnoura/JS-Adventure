//Write a function that takes two numbers and returns the maximum of the two.

//solution 1 (better way)

let number = max(12, 3);
console.log(number);

function max(a, b) {
  return a > b ? a : b;
}

//solution 2
let num = maximum(2, 5);
console.log(num);

function maximum(a, b) {
  if (a > b) return a;
  return b;
}
