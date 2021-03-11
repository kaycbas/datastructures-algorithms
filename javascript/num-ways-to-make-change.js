// O(n*d) Time | O(n) Space - where n is the target, and d is # of denominations
function numberOfWaysToMakeChange(n, denoms) {
    const numWays = Array(n + 1).fill(0);
    numWays[0] = 1;

    for (let denom of denoms) {
        for (let amount = 1; amount <= n; amount++) {
            if (amount >= denom) {
                const remainder = amount - denom;
                numWays[amount] += numWays[remainder];
            }
        }
    }
    return numWays[n];
}