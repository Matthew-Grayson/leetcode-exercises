/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/\W|_/g, "").toLowerCase();
    let i = 0, j = s.length - 1;
    while(i < j) {
        if(s.charAt(i) !== s.charAt(j)) return false;
        i++, j--;
    }
    return true;
};