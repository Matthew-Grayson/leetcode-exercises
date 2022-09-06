/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length === 0) return true;
    let sArr = s.split('');
    let testArr = [];
    for(let i = 0; i < sArr.length; i++) {
        if(sArr[i] === "(") {
            testArr.push(")")
        } else if(sArr[i] === "[") {
            testArr.push("]")
        } else if(sArr[i] === "{") {
            testArr.push("}")
        } else if(testArr === 0 || sArr[i] !== testArr.pop()) {
            return false;
        }
    }
    return testArr.length === 0;
}