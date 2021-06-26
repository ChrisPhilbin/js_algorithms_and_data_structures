//n log(n) runtime

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];

const merge = (arr1, arr2) => {
  let results = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }

    while (i < arr1.length) {
      results.push(arr1[i]);
      i++;
    }

    while (j < arr2.length) {
      results.push(arr2[j]);
      j++;
    }
  }
  return results;
};

console.log(merge(arr1, arr2));