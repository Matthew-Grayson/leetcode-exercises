var maxProfit = function(prices) {
    let lowest = prices[0];
    let diff = 0;
    let maxDiff = 0;

    for (let i = 0; i < prices.length; i++) {
        lowest = Math.min(lowest, prices[i]);
        diff = prices[i] - lowest;
        maxDiff = Math.max(diff, maxDiff);
    }

    return maxDiff;
};