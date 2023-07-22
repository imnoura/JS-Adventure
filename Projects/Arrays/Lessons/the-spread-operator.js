const first = [1, 2, 3];
const second = [4, 5, 6];

//rewrite this code "const combined = first.concat(second);" using the spread operator(which is cleaner and more flexible)
//when we spread an array: all its elements are returned individually.
const combined = [...first, ...second]; //this piece of code here is exactly like this: [1, 2, 3, 4, 5, 6]
//with the spread operator we have more flexibility: we can easily add an element between them or at the end: [...first, 'a', ...second, 'b']

console.log(combined);

//if you call the slice method without any arguments this will return a copy of the original array
//we can use the spread operator to copy all the elements of an array into a new array.
const copy = [...combined];

console.log(copy);
