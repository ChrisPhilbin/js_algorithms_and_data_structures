const maxSubArraySum = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};

let arr = [6, 2, 54, 7, 8, 3, 5, 6, 8, 1, 2, 16, 18, 19];
let num = 6;

console.log(maxSubArraySum(arr, num));
