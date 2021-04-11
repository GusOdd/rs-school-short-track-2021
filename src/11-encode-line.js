/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const result = [];
  let count = 1;
  result.push(count, arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === result[result.length - 1]) {
      count += 1;
      result.splice(result.length - 2, 1, count);
    }
    if (arr[i] !== result[result.length - 1]) {
      count = 1;
      result.push(arr[i]);
      result.splice(result.length - 1, 0, count);
    }
  }
  const final = result.filter((el) => el !== 1);
  return final.join('');
}

module.exports = encodeLine;
