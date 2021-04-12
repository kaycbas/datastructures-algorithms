// Google technical phone screen
// O(n) time | O(1) space - where n is the length of the path
function calculateRisk(path) {
    let totalSuccessRate = 1;

    for (let i = 0; i < path.length - 1; i++) {
        const loc1 = path[i];
        const loc2 = path[i + 1];
        
        if (loc1[0] === loc2[0]) { // vertical pass
            let minRow = Math.min(loc1[1], loc2[1]);
            let successRate = 1 - (0.5 * (0.5 ** minRow));
            console.log(successRate);
            totalSuccessRate *= successRate;
        } else { // horizontal pass
            let successRate = 1 - (0.9 * (0.5 ** loc1[1]));
            console.log(successRate);
            totalSuccessRate *= successRate;
        }
    }

    return (1 - totalSuccessRate) * 100;
}
// [x, y] => [col, row]
let path = [[0, 0], [0, 1], [1, 1]];

console.log(calculateRisk(path)); // 72.5% risk