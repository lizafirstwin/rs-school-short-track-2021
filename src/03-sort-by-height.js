/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr2 = arr.slice();
  const arr1 = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] !== -1) {
      arr1.push(arr2[i]);
      delete arr2[i];
    }
  }
  arr1.sort((a, b) => a - b);
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] !== -1) {
      arr2.splice(i, 1, arr1[0]);
      arr1.shift();
    }
  }
  return arr2;
}

module.exports = sortByHeight;
