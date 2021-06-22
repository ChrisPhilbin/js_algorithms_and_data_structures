//count the number of times a shorter string (sub string) appears in a longer string

const stringSearch = (long, short) => {
  // longstring = "wowomgzomg"
  // subString =  "omg"
  let matches = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) {
        break;
      }
      if (j === short.length - 1) {
        matches++;
      }
    }
  }
  return matches;
};

console.log(stringSearch("wowomgzomg", "omg"));
