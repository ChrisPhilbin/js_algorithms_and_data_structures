const countUniqueValues = (arr) => {
  let first = 0;
  let second = 1;
  let uniques = 0;

  if (arr.length === 0) {
    return 0;
  }

  while (second < arr.length) {
    if (arr[first] !== arr[second]) {
      uniques++;
    }
    first++;
    second++;
  }
  return uniques;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); //should return 2

//create a function that takes in an array and counts the number of unique values within the array

//uniques(1, 1, 1, 2) => should return 2 because there are only 1 and 2 present
//uniques(1, 2, 3, 4) => should return 4 because there are 4 unique values
//uniques(-1, -1, 2, 3, 4, 2, 3) => should return 4
