const first = [1, 2, 3];
const second = [4, 5, 6];

//to combine these arrays we use the concat method:
const combined = first.concat(second);

console.log(combined);

//another method that is the opposite of the method concat "slice"
//we use slice method to slice an array into two parts:
const slice = combined.slice(2, 4);

console.log(slice);

//second way to use the slice method: that we can get all the elements in the original array starting from the given index.
const slice1 = combined.slice(2);

console.log(slice1);

//third way to use the slice method: with this we get the copy of the original array.
const slice2 = combined.slice();

console.log(slice2);

//**If the elements are primitive they are copied by a value, and if they are reference types, they are copied by their reference**
