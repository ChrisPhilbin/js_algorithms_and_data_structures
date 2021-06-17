let str1 = "anagram";
let str2 = "amagrann";

let counts = {};

const isAnagram = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    if (counts[letter] ? (counts[letter] += 1) : (counts[letter] = 1));
  }

  for (let i = 0; i < second.length; i++) {
    letter = second[i];
    if (!counts[letter]) {
      return false;
    } else {
      counts[letter] -= 1;
    }
  }
  return true;
};

console.log(isAnagram(str1, str2));
