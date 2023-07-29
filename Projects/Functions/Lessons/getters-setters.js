const person = {
  firstName: "Noura",
  lastName: "Mousavi",
  //When we wanna add a function into an object we just add the keyword, Not the "function" after it.
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    //*defensive programming*: We should do error handling at the beginning of a functon or a method.
    if (typeof value !== "string") throw new Error("Value is not a string.");

    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Enter a first and last name.");

    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person.fullName = true;
} catch (e) {
  alert(e);
}
console.log(person);

//There are a couple of problems with this approach:
// 1- This(console.log part) is read only. In other words we can not set a person's fullName from the outside => person.fullName = "Noura Mousvai" and then the firstName and lastName properties would be automatically set based on what we passed here. WITH SETTER: we add the set keyword then the name of the property or method(fullName) and the code block. *this method needs a paraneter*
// 2- it is not nice to call it(in the console.log) like a method. It would be nicer if we could treat this as a property so we could drop the parenthesis => console.log(person.fullName) => WITH GETTER: by adding a "get" before fullName
//THAT'S WHERE GETTERS AND SETTERS COME IN THE PICTURE
//getters => access properties => to fix
//setters => change (mutate) them

//Sometimes we wanna report an error in our application that's where we throw an exception.
//When we throw an exception the lines after throw statement are not executed
