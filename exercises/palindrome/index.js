// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  if (str.length % 2 === 0) {
    halfway = str.length / 2;
    const first = str.slice(0, halfway);
    const second = str
      .slice(halfway, str.length)
      .split("")
      .reverse()
      .join("");
    return first === second;
  } else {
    half = Math.floor(str.length / 2);
    const first = str.slice(0, half);
    const second = [...str.slice(half + 1, str.length)].reverse().join("");
    return first === second;
  }
}

module.exports = palindrome;
