//we can get all the properties in an object and copy them into another object.

const circle = {
  radious: 1,
  draw() {
    console.log("draw");
  },
};

//**the old method:

//const another = {};

//for (let key in circle) another[key] = circle[key];

//console.log(another);

//**the new method: "Object.assign": (copies the properties and methods from one or more source objects into the target object and we can use that to clone an object or combine multiple objects into a single object)

//const another = Object.assign({}, circle);
//console.log(another);

//**another simpler and more elegant way to clone an object: "The spread operator": (is used to spread an object which basically means getting all its properties and methods and putting them into another object)

const another = { ...circle };

console.log(another);
