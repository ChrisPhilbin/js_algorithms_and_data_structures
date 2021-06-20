const search = (arr, val) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2); //find the middle point of the array and round down
    let currentElement = arr[middle]; //set the currentElement to the value at arr[middle]

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
};

let arr = [1, 2, 3, 4, 5, 6, 7];
let val = 6;

console.log(search(arr, val)); //should log index #5

//log(N) runtime
