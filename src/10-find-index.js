/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let startIndex = 0;
  let endIndex = array.length - 1;
  let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
  while (value !== array[middleIndex]) {
    if (value < array[middleIndex]) {
      endIndex = middleIndex - 1;
    }
    if (value > array[middleIndex]) {
      startIndex = middleIndex + 1;
    }
    middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
  }
  return middleIndex;
}

module.exports = findIndex;
