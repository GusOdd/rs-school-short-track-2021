/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const revDomains = domains.map((el) => el.split('.').reverse().join('.'));
  const arr = [];
  revDomains.forEach((el) => {
    const interArr = el.split('.');
    while (interArr.length > 0) {
      arr.push(interArr.join('.'));
      interArr.pop();
    }
  });
  const result = {};
  arr.forEach((el) => {
    if (result[`.${el}`]) {
      result[`.${el}`] += 1;
    }
    if (!result[`.${el}`]) {
      result[`.${el}`] = 1;
    }
  });
  return result;
}

module.exports = getDNSStats;
