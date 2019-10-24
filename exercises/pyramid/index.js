// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0) {
  if (row === n) {
    return;
  } else {
    const columns = n * 2 - 1;
    const mid = Math.floor(columns / 2);
    let step = "";
    for (let column = 0; column < columns; column++) {
      if (mid - row <= column && mid + row >= column) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
    return pyramid(n, row + 1);
  }
}

// function pyramid(n) {
//   const columns = n * 2 - 1;
//   const mid = Math.floor(columns / 2);
//   for (let row = 0; row < n; row++) {
//     let step = "";
//     for (let column = 0; column < columns; column++) {
//       if (mid - row <= column && mid + row >= column) {
//         step += "#";
//       } else {
//         step += " ";
//       }
//     }
//     console.log(step);
//   }
// }

module.exports = pyramid;
