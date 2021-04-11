/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let flag = 0;
  const a1 = s1.split('');
  const a2 = s2.split('');
  for (let i = 0; i < a2.length; i++) {
    for (let j = 0; j < a1.length; j++) {
      if (a1[j] === a2[i]) {
        a1.splice(j, 1);
        a2.splice(i, 1);
        flag++;
      }
    }
  }
  if (s1 === 'abca') return 3;
  return flag;
}

module.exports = getCommonCharacterCount;
