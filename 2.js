// let data = prompt("Введите число");
// let num = parseInt(data);
function primeNumberCheck(num) {
  if (
    typeof num === "number" &&
    Number.isInteger(num) &&
    num > 1 &&
    num <= 1000
  ) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        console.log(`${num} is not a prime number!`);
        return;
      }
    }
    console.log(`${num} is a prime number!`);
  } else {
    console.log("Data is incorrect!");
  }
}
primeNumberCheck(9);
