//if we wanna iterate an array we can use the for...of loop.
const numbers = [1, 2, 3];

for (let number of numbers) console.log(number);

//another way to iterate an array: (the forEach method)
//when we call the forEach method this function will be executed for each element in the array, each element will be pass as an argument to this function
numbers.forEach(function (number) {
  console.log(number);
});

//we can use that arrow function syntax to simplify this code so, we get rid of the function key word:
numbers.forEach((number) => console.log(number));

//this callback function that we pass to the forEach method can optionally take a second parameter: (index).
numbers.forEach((number, index) => console.log(number, index));
