//we can not reassign constant to something else, however, it is perfectly fine to modify the content of this array, we can add new elements or remove exciting elements.
const numbers = [3, 4];

//Add new elements to the END:
numbers.push(5, 6);

//Add new elements to the BEGINNING:
numbers.unshift(1, 2);

//Add new elements to the MIDDLE:
numbers.splice(2, 0, "a", "b");

console.log(numbers);
