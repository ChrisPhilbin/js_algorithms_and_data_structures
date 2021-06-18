//return the first pair of numbers whose absolute value when added
//equals zero

const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));

//given an array of sorted numbers, return the number of unique numbers using the
//two pointer method

//ie: uniqueNumbers([1, 1, 1, 1, 2]) => should return 2
//ie: uniqueNumbers([2, 2, 2, 2]) => should return 1
//ie: uniqueNumbers([1, 2, 3, 4, 5]) => should return 5

const uniqueNumbers = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
};

console.log(uniqueNumbers([1, 1, 1, 2, 3, 4]), "Number of unique numbers");
