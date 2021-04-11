/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  function makeArr(arr) {
    return arr.map((el, index, array) => {
      if (index === 0) return el;
      const interArr = array.slice(0, index);
      const newInterArr = interArr.filter((interEl) => interEl === el);
      if (newInterArr.length === 0) return el;
      return `${el}(${newInterArr.length})`;
    });
  }

  let compareArr = makeArr(names);
  let set = new Set(compareArr);

  while (set.size !== compareArr.length) {
    compareArr = makeArr(compareArr);
    set = new Set(compareArr);
  }

  return compareArr;
}

module.exports = renameFiles;
