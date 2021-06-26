//build up the sort by gradually creating a larger half which is always sorted
//worst case O(n^2)

let arr = [1, 8, 2, 4, 7, 8, 12, 16, 0, 12, 14, 2, 7, 2];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j > -1 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};

console.log(insertionSort(arr));
