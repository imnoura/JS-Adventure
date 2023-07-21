//factory function: camel notation
function createCircle(radious) {
  return {
    radious,
    draw() {
      console.log("draw");
    },
  };
}

const circle1 = createCircle(1);
console.log(circle1);
