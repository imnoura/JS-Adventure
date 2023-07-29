const circle = {
  radious: 1,
  get area() {
    return Math.PI * this.radious * this.radious;
  },
};

console.log(circle.area);
