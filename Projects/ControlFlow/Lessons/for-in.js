//we use for...in when we wanna display all the properties of this person object.
const person = {
  name: "Noura",
  age: 19,
};

for (let key in person) console.log(key, person[key]);

//
const colors = ["red", "green", "blue"];
for (let index in colors) console.log(index, colors[index]);
