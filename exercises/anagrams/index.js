// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const wordMap = str => {
  str = str.replace(/\W+/g, "");
  const strArr = str.toLowerCase().split("");
  return strArr.reduce((a, string) => {
    a[string] ? (a[string] += 1) : (a[string] = 1);
    return a;
  }, {});
};

function anagrams(stringA, stringB) {
  firstMap = wordMap(stringA);
  secondMap = wordMap(stringB);
  let same = true;
  for (let key in firstMap) {
    if (firstMap[key] != secondMap[key]) {
      same = false;
    }
  }
  for (let key in secondMap) {
    if (firstMap[key] != secondMap[key]) {
      same = false;
    }
  }
  return same;
}

module.exports = anagrams;
