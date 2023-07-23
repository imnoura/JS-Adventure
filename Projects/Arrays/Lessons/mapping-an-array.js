//map method: with this method we can map each item in an array to something else.
const numbers = [1, -1, 2, 3];

const filtered = numbers.filter((n) => n >= 0);

//whith the markup below: we can display each number using a bullet point.
const items = filtered.map((n) => "<li>" + n + "</li>");

//to have string instead of an array:
//note that by default comma is used as the seperator, and we do not want comma in our html markup, we just wanna combine these using an empty character.
//in this example we are mapping these numbers to strings:
const html = items.join("");

console.log(filtered);
console.log(items);
console.log(html);

//mapping the numbers to an object with a value property:
const numbers1 = [1, -1, 2, 3];

//note that if you are returning an object you need to put that object in () and with this our js engine will not look at this as code block.
//chaining:
const items1 = numbers1.filter((n) => n >= 0).map((n) => ({ vlaue: n }));

console.log(items1);

//chaining:
