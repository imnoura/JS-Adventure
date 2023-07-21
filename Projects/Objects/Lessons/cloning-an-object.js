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

//**the new method:

//const another = Object.assign({}, circle);
//console.log(another);

//**another simpler and more elegant way to clone an object:

const another = { ...circle };

console.log(another);
