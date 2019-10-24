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

function pyramid(n) {
  const columns = n * 2 - 1;
  const mid = Math.floor(columns / 2);
  for (let row = 0; row < n; row++) {
    let step = "";
    for (let column = 0; column < columns; column++) {
      if (mid - row <= column && mid + row >= column) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
}

// function pyramid(n) {
//   // row size is n + (n-1)
//   //center position  of row
//   // stop when pyramid row equals n
//   const totalColumns = n + (n - 1);
//   const center = Math.ceil(totalColumns / 2);
//   const offSet = num => Math.floor(num / 2);

//   let row = 1;
//   while (row <= n) {
//     let step = "";
//     let currentOffset = offSet(row);
//     for (let i = 1; i <= totalColumns; i++) {
//       step +=
//         i >= center - currentOffset && i < center + currentOffset + 1
//           ? "#"
//           : " ";
//     }
//     row += 1;
//     console.log(step);
//   }
// }

module.exports = pyramid;
