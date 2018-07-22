/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var map = {};
    var count = 0;
    var highest = 0;
    var start = 0;

    for (var i = 0; i < s.length; i++) {
        let letter = s[i];

        if (map[letter] !== undefined && map[letter] >= start ) {
            start = map[letter] + 1;
            count = i - start;
        }
        count++;
        highest = Math.max(highest, count);
        map[letter] = i;

    }

    return highest;
};