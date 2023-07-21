//*Truthy (true)*
//const firstName = "noura";
//if (firstName) console.log("Hello");

//*Falsy (false): undefined, null, '', false, 0, NaN.*
//const lastName = "";
//if (lastName) console.log("Hello");

const array = [0, null, undefined, "", 2, 5];
console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}
