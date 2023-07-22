const numbers = [1, 2, 3];

const joined = numbers.join(",");

console.log(joined);

//another usefull method that goes hand in hand with join: (split method)
const message = "This is my first message!";
const parts = message.split(" ");
console.log(parts);

//this technique is particularly usefull when bulding a url slug:
const combined = parts.join("-");
console.log(combined);
