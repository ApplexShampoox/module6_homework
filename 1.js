let array = [0, 1, 2, 3, 5, "text", null, NaN, 0];
let array2 = [0, 1, 2, "text", null, NaN, 0];
function oddEvenCounter(arr) {
  let even = 0,
    odd = 0,
    zero = 0,
    error = 0;

  arr.forEach(function (item) {
    if (isNaN(item)) {
      error++;
    } else if (typeof item === "number" && item === 0) {
      zero++;
    } else if (typeof item === "number" && item % 2 === 0) {
      even++;
    } else if (typeof item === "number" && item % 2 !== 0) {
      odd++;
    } else {
      error++;
    }
  });

  console.log("even:", even);
  console.log("odd:", odd);
  console.log("zero:", zero);
  console.log("error:", error);
}

oddEvenCounter(array);
oddEvenCounter(array2);
