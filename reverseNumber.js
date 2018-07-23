/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var reverseNum = Number(Math.abs(x).toString().split('').reverse().join(''));

    if (reverseNum < -Math.pow(2, 31) || reverseNum > Math.pow(2, 31) - 1) {
      return 0;
    }

    return x > 0 ? reverseNum : -reverseNum;
};