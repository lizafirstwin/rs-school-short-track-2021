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
  const obj = {};
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    if (Object.prototype.hasOwnProperty.call(obj, item)) {
      obj[item]++;
    } else {
      obj[item] = 1;
    }
  }
  const entries = Object.entries(obj);
  for (let i = 0; i < entries.length; i++) {
    if (entries[i][1] === 1) {
      arr.push(entries[i][0]);
    } else {
      arr.push(entries[i][1] + entries[i][0]);
    }
  }
  return arr.join('');
}

module.exports = encodeLine;
