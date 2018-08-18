function longestPalindrome(s) {
  if (!s) return "";
  var result = [""];

  function checkBothSides(left, right) {
    while(left >= 0 && right < s.length
      && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);

  }

  for (var i = 0; i < s.length; i++) {
    var oddPal = checkBothSides(i-1, i+1)
    var evenPal = checkBothSides(i, i+1)

    if (oddPal.length >= result[result.length-1].length) result.push(oddPal);
    if (evenPal.length >= result[result.length-1].length) result.push(evenPal);
  }

  return result.sort(function(a,b) {
    return b.length-a.length || a.localeCompare(b);
  })[0];
}