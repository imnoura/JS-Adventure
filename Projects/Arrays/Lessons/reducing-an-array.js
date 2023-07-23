const numbers = [1, -1, 2, 3];

// let sum = 0;
// for (let n of numbers) sum += n;

//a cleaner and more elegant way to write the same code: the reduce method
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
//accumulator : let sum = 0;
//currentValue : each element in the array

//to initialize this accumulator to 0: as the second argument to the reduce method we pass 0(the first argument is the callBack function)
//so if we supply an initial value we will have one more call, if we do not the first element in this array will be used as the initial value

console.log(sum);

//what is exactly happening? This is happening:
// a = 0, c = 1 => 1
// a = 1, c = -1 => 0
// a = 0, c = 2 => 2
// a = 2, c = 3 => 5

//the shorter way without initializing accumulator:
// a = 1, c = -1 => 0
// a = 0, c = 2 => 2
// a = 2, c = 3 => 5
