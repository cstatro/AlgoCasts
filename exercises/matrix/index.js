// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

const directions = {
  right: { row: 0, column: 1 },
  down: { row: 1, column: 0 },
  left: { row: 0, column: -1 },
  up: { row: -1, column: 0 }
};

function checkPosition(matrix, direction, rowPos, columnPos) {
  try {
    const { row, column } = directions[direction];
    return matrix[rowPos + row][columnPos + column] === false;
  } catch (error) {
    return false;
  }
}

function matrix(n) {
  const spiralMatrix = Array(n)
    .fill()
    .map(i => Array(n).fill(false));
  //use these to track position and progress
  let rowPos = 0;
  let columnPos = 0;
  let counter = 1;
  let currentDir = "right";

  while (counter <= n * n) {
    spiralMatrix[rowPos][columnPos] = counter;
    //decide what direction the spiral needs to go in

    if (counter != n * n) {
      while (
        checkPosition(spiralMatrix, currentDir, rowPos, columnPos) === false
      ) {
        switch (currentDir) {
          case "right":
            currentDir = "down";
            break;
          case "down":
            currentDir = "left";
            break;
          case "left":
            currentDir = "up";
            break;
          case "up":
            currentDir = "right";
            break;
          default:
            break;
        }
      }
      const { row, column } = directions[currentDir];
      columnPos += column;
      rowPos += row;
    }

    counter += 1;
  }
  return spiralMatrix;
}

module.exports = matrix;
