/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const key = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    let sum = 0;
    let decode = [];
    for (let elem of s) {
        decode.push(key[elem])
    }
    for (let i = 0; i < decode.length; i++) {
        if (decode[i] < decode[i + 1]) {
            sum += decode[i + 1] - decode[i];
            i++;
        }
        else sum += decode[i];
    }
    return sum;
}
