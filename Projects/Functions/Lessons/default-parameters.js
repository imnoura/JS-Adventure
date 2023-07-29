function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000));

//Once you give a parameter a default value you should also give all the other parameters that a default value. If we, don't we get "NaN".
