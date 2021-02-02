// O(n) Time | O(1) Space
var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};