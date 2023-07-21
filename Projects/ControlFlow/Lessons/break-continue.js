let i = 0;
while (i <= 10) {
  if (i === 5) break;
  console.log(i);
  i++;
}

let x = 0;
while (x <= 10) {
  if (x % 2 === 0) {
    x++;
    continue;
  }
  console.log(x);
  x++;
}
