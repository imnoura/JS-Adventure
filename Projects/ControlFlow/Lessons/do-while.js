//in while loops this condition (i <= 5) is evaluted ahead of time, at the beginning of every iteration. in contrast, in do...while loops the condition is evaluted at the end and that means the statements are always executed at least once.
let i = 11;
do {
  if (i % 2 !== 0) console.log(i);
  i++;
} while (i <= 5);
