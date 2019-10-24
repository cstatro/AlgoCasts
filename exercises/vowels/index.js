// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowels = "aeiou";
  const splitLetters = [...str.toLowerCase()];
  return splitLetters.filter(l => vowels.includes(l)).length;
}

module.exports = vowels;
