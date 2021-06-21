function areThereDuplicates() {
  if (arguments.length === 0) return false;

  let counts = {};

  for (let i = 0; i < arguments.length; i++) {
    counts[arguments[i]] = counts[arguments[i]] + 1 || 1;
  }

  for (let key in counts) {
    if (counts[key] > 1) return true;
  }

  return false;
}

console.log(areThereDuplicates("hello", "world", "hello")); //should return true
console.log(areThereDuplicates(1, 2, 3, 4, 5)); //should return false
