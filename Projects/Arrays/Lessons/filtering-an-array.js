const numbers = [1, -1, 2, 3];

//how we read the code below: we filter and we get numbers where number is greater or equal to 0
const filtered = numbers.filter((n) => n >= 0);
//to make the code even shorter not only we can use arrow function we can use v for value and n for numbers

console.log(filtered);
