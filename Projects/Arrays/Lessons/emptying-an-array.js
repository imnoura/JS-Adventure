//solution 1:
//*note that: this old array is still in the memory so if there are no references to this object, eventually it will be removed by the garbage collector.
//so if we had something like "let another = numbers;" => this original array will not be garbage collected
let numbers = [1, 2, 3, 4];
let another = numbers;

numbers = [];

console.log(numbers);
console.log(another);

//solution 2:(for when you have multiple references to the original array)
let numbers1 = [1, 2, 3, 4];
let another1 = numbers1;

numbers1.length = 0;

console.log(numbers1);
console.log(another1);

//solution 3: (remove all the elements with numbers.length)
let numbers2 = [1, 2, 3, 4];
let another2 = numbers2;

numbers2.splice(0, numbers2.length);

console.log(numbers2);
console.log(another2);

//solution 4: (we can put the pop method in a loop and keep calling this method as long as we have not element in this array)
let numbers3 = [1, 2, 3, 4];
let another3 = numbers3;

while (numbers3.length > 0) numbers3.pop();

console.log(numbers3);
console.log(another3);

//solution 1 is highly recommended: for when you have single reference to the array
//solution 2 is highly recommended: always a great choise
//solution 3 is not the best option: it is a bit noisy
//solution 4 is not recommended: it is not clean
