function func(a) {
  return function (b) {
    return a + b;
  };
}
let sum = func(5);
console.log(sum(6));
