// Leetcode: https://leetcode.com/problems/asteroid-collision/
// O(n) Time | O(n) Space
const asteroidCollision = function(asteroids) {
    let stack = [];
    for (const ast of asteroids) {
        collision: {
            while (stack.length > 0 && ast < 0 && stack[stack.length - 1] > 0) {
                const stackAsteroid = stack[stack.length - 1];
                if (stackAsteroid < -ast) {
                    stack.pop();
                    continue;
                } else if (stackAsteroid === -ast) {
                    stack.pop();
                }
                break collision;
            }
            stack.push(ast);
        }
    }
    return stack;
}