const sameFrequency = (num1, num2) => {
  //if the 2 numbers are not the same number of digits return false

  num1 = num1.toString().split("");
  num2 = num2.toString().split("");

  if (num1.length !== num2.length) return false;

  let num1Counts = {};
  let num2Counts = {};

  num1.forEach((digit) => {
    num1Counts[digit] = num1Counts[digit] + 1 || 1;
  });

  num2.forEach((digit) => {
    num2Counts[digit] = num2Counts[digit] + 1 || 1;
  });

  for (let key in num1Counts) {
    if (num1Counts[key] !== num2Counts[key]) return false;
  }

  return true;

  //count up the frequencies of each digit from each given number
  //check and see if the frequencies match between each set of counts
  //if the frequencies match, return true
  //if not, return false
};

num1 = 1233;
num2 = 3321;

console.log(sameFrequency(num1, num2)); //should log "true"
