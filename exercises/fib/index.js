// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n, arr = []) {
  if (arr.length === 0) {
    const newArr = [1, 1];
    return fib(n, newArr);
  } else if (arr.length >= n) {
    return arr[n - 1];
  } else {
    const newArr = [...arr, arr[arr.length - 1] + arr[arr.length - 2]];
    return fib(n, newArr);
  }
}

module.exports = fib;
