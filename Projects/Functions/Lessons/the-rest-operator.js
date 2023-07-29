//When we apply the rest operator(...args) to a parameter of a function we can pass varying number of arguments and the rest operator will take all of them and put them in an array.
//** "rest parameter must be last formal parameter" => this is why we call it the rest operator.

//exercise 1:
function sum(...args) {
  return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5, 10));

//exercise 2:
function sum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum(0.1, 20, 30, 1));
