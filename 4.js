function counter(a, b) {
  let i = a;
  let intervalId = setInterval(function () {
    console.log(i);
    if (i >= b) {
      clearInterval(intervalId);
    }
    i++;
  }, 1000);
}
counter(2, 10);
