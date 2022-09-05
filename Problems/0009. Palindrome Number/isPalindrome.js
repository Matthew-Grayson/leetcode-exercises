/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let testStr = "";
    for (let elem of String(x)) {
        testStr = elem + testStr
    }
    return String(x) === testStr;
};