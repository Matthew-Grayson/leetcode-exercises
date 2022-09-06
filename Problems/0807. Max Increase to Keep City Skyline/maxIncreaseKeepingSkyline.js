/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    const gLen = grid.length;
    let maxRows = [], maxCols = [], output = 0;
    for (let i = 0; i < gLen; i++) {
        for (let j = 0; j < gLen; j++) {
            maxRows[i] = Math.max((maxRows[i] || 0), grid[i][j]);
            maxCols[j] = Math.max((maxCols[j] || 0), grid[i][j]);
        }
    }
    for (let i = 0; i < gLen; i++) {
        for (let j = 0; j < gLen; j++) {
            output += Math.min(maxRows[i], maxCols[j]) - grid[i][j];
        }
    }
    return output;
}