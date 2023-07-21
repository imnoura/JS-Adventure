//Prime (whose factors are only 1 and itsel): 13 = 1, 13
//Composite (can be divided evenly by its factors): 12 = 1, 2, 3, 4, 6, 12

showPrimes(20);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}
function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}
