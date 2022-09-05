/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort();
    let longest = [],
        first = strs[0].split(''),
        last = strs[strs.length - 1].split(''),
        sLen = Math.min(first.length, last.length);
    for(let i = 0; i < sLen; i++) {
        if(first[i] === last[i]) {
            longest.push(first[i])
        } else return longest.join('');
    }
    return longest.join('');
}