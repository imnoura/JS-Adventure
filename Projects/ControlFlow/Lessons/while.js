//key difference between a while loop and a for loop: in for loops, the loop variable is part of the loop itself but, in the while loops we have to declare this variable externally.
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}
