const numbers = [1, 2, 3, 4, 5, 6];

//remove an element from the end:
const last = numbers.pop();
console.log(numbers);
console.log(last);

//remove an element from the beginning:
const first = numbers.shift();
console.log(numbers);
console.log(first);

//remove an element from the middle:
const middle = numbers.splice(2, 1);
console.log(numbers);
console.log(middle);

//*numbers.splice(2, 1): the first argument is the index we are going to start from and the second argument is the for deleting multiple elements.*
