/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let max = Math.max(m, n),
        min = Math.min(m, n),
        output = 1;
    for(let i = 0; i < min - 1; i++) {
        output *= (max + i)/(i + 1);
    }
    return output;
};