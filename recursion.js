const countDown = (num) => {
  if (num <= 0) {
    console.log("All done!");
    return;
  }

  console.log(num);
  num--;
  countDown(num);
};

countDown(100);

const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

console.log(sumRange(10));

const factorial = (num) => {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
};

console.log(factorial(5), "factorial function");

const fib = (num) => {
  if (num < 2) {
    return num;
  }
  return fib(num - 1) + fib(num - 2);
};

console.log(fib(15), "fib function");

const power = (base, exponent) => {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
};

console.log(power(4, 4), "power function");
