// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = parseInt([...n.toString()].reverse().join(""));
  return n < 0 ? reversed - reversed * 2 : reversed;
}

module.exports = reverseInt;
