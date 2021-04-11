/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const lastRow = matrix.length - 1;
  const lastColumn = matrix[0].length - 1;
  const result = [];
  for (let i = 0; i <= lastRow; i++) {
    const rowArr = [];
    for (let j = 0; j <= lastColumn; j++) {
      const interArr = [];
      if (i === 0) {
        if (j === 0) {
          interArr.push(
            matrix[i][j + 1],
            matrix[i + 1][j], matrix[i + 1][j + 1],
          );
        }
        if (j > 0 && j < lastColumn) {
          interArr.push(
            matrix[i][j - 1], matrix[i][j + 1],
            matrix[i + 1][j - 1], matrix[i + 1][j], matrix[i + 1][j + 1],
          );
        }
        if (j === lastColumn) {
          interArr.push(
            matrix[i][j - 1],
            matrix[i + 1][j - 1], matrix[i + 1][j],
          );
        }
      }
      if (i > 0 && i < lastRow) {
        if (j === 0) {
          interArr.push(
            matrix[i - 1][j], matrix[i - 1][j + 1],
            matrix[i][j + 1],
            matrix[i + 1][j], matrix[i + 1][j + 1],
          );
        }
        if (j > 0 && j < lastColumn) {
          interArr.push(
            matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i - 1][j + 1],
            matrix[i][j - 1], matrix[i][j + 1],
            matrix[i + 1][j - 1], matrix[i + 1][j], matrix[i + 1][j + 1],
          );
        }
        if (j === lastColumn) {
          interArr.push(
            matrix[i - 1][j - 1], matrix[i - 1][j],
            matrix[i][j - 1],
            matrix[i + 1][j - 1], matrix[i + 1][j],
          );
        }
      }
      if (i === lastRow) {
        if (j === 0) {
          interArr.push(
            matrix[i - 1][j], matrix[i - 1][j + 1],
            matrix[i][j + 1],
          );
        }
        if (j > 0 && j < lastColumn) {
          interArr.push(
            matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i - 1][j + 1],
            matrix[i][j - 1], matrix[i][j + 1],
          );
        }
        if (j === lastColumn) {
          interArr.push(
            matrix[i - 1][j - 1], matrix[i - 1][j],
            matrix[i][j - 1],
          );
        }
      }
      const mines = interArr.reduce((acc, val) => acc + +val, 0);
      rowArr.push(mines);
    }
    result.push(rowArr);
  }
  return result;
}

module.exports = minesweeper;
