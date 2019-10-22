// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const strObj = str.split("").reduce((a, c) => {
    a[c] ? (a[c] += 1) : (a[c] = 1);
    return a;
  }, {});

  maxCount = 0;
  maxLetter = "";
  for (key in strObj) {
    if (strObj[key] > maxCount) {
      maxCount = strObj[key];
      maxLetter = key;
    }
  }
  return maxLetter;
}

module.exports = maxChar;
