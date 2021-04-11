/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arr = Array.from(n.toString(), (x) => +x);
  while (arr.length > 1) {
    const number = arr.reduce((acc, el) => acc + el);
    arr = Array.from(number.toString(), (x) => +x);
  }
  return arr[0];
}

module.exports = getSumOfDigits;
