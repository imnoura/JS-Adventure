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
