const person = {
  firstName: "Noura",
  lastName: "Mousavi",
  //When we wanna add a function into an object we just add the keyword, Not the "function" after it.
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "Edvard Munch";

console.log(person);

//There are a couple of problems with this approach:
// 1- This(console.log part) is read only. In other words we can not set a person's fullName from the outside => person.fullName = "Noura Mousvai" and then the firstName and lastName properties would be automatically set based on what we passed here. WITH SETTER: we add the set keyword then the name of the property or method(fullName) and the code block. *this method needs a paraneter*
// 2- it is not nice to call it(in the console.log) like a method. It would be nicer if we could treat this as a property so we could drop the parenthesis => console.log(person.fullName) => WITH GETTER: by adding a "get" before fullName
//THAT'S WHERE GETTERS AND SETTERS COME IN THE PICTURE
//getters => access properties => to fix
//setters => change (mutate) them
