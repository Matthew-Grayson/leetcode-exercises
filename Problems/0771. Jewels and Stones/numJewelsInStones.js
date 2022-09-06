/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const jewelArray = jewels.split("");
    const stoneArray = stones.split("");
    let jewelCount = 0;
    stoneArray.forEach(stone => {
        jewelArray.includes(stone) && jewelCount++;
    })
    return jewelCount;
};