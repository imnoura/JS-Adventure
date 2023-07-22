//method *indexOf*: we pass the element we are looking for and if that element exists in the array this method will return the index of that element in the array. if it does not exist, it will return -1.
//the type of the element matters. so if we pass 1 as a string here, again we get -1 because it is not string, it is number.
const numbers = [1, 2, 3, 4];

console.log(numbers.indexOf(1));

//method *lastIndexOf: this will return the last element of the given element or -1 if it does not exist.
const numbers1 = [1, 2, 3, 1, 4];

console.log(numbers1.lastIndexOf(1));

//basically to see if a given element exist in an array we can do:
//if this expression returns true that means this element exists in the array
//*the old method:
const numbers2 = [1, 2, 3, 1, 4];
console.log(numbers2.indexOf(1) !== -1);

//*the new method:
const numbers3 = [1, 2, 3, 1, 4];
console.log(numbers3.includes(1));

//**all these methods have the second parameter which is optional: (the starting index): the index that search will begin
const numbers4 = [1, 2, 3, 1, 4];

console.log(numbers4.indexOf(1, 2));
