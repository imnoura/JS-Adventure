//Function Declaration
function walk() {
  console.log("walk");
}

//Anonymous Function Expression
let run = function () {
  console.log("run");
};
//We can call this anonymous function using  this reference:
run();

//Named Function Expression
let run1 = function walk1() {
  console.log("run1");
};

//Key difference between "function declaration" and "function expression": we can call "declaration function" before it is defined
//The reason for this is: hoisting
//Hoisting: It's the process of moving function declarations to the top of the file and this is done automatically by the javascript engine that is executing this code.
